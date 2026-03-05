import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import CaseStudy from '@/lib/models/CaseStudy';

export async function GET() {
  await dbConnect();
  const cases = await CaseStudy.find({});
  return NextResponse.json({ success: true, cases });
}
