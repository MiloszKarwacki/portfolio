import { NextResponse } from 'next/server';
import { sendEmails } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const result = await sendEmails(email, message);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error handling message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}