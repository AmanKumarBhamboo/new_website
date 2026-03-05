
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import BlogPost from '@/lib/models/BlogPost';

export async function GET() {
  await dbConnect();
  const posts = await BlogPost.find({});
  return NextResponse.json({ success: true, posts });
}
