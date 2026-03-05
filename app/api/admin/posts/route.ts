import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import BlogPost from '@/lib/models/BlogPost';
import { verifyToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { title, category, description } = await req.json();

    await dbConnect();
    const post = await BlogPost.create({ title, category, description });

    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error) {
    console.error('Admin Create Post API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
