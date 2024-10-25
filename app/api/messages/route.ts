import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    const newMessage = await prisma.message.create({
      data: {
        email,
        message,
      },
    });

    return NextResponse.json(newMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}