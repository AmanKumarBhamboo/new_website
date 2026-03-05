import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/lib/models/Lead';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    await dbConnect();

    // Save to database
    const lead = await Lead.create({ name, email, subject, message });

    // Send email notification (Optional - if transport is configured)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: '"Value Talent Advisory" <no-reply@valuetalent.in>',
        to: process.env.ADMIN_EMAIL || 'vaishnavi@valuetalent.in',
        subject: `New Lead: ${subject || 'General Inquiry'}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // We still return success because the lead is saved in DB
    }

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
