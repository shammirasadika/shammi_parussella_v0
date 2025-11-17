import { NextResponse } from 'next/server';
import { enhancedDigitalTwinQuery } from '@/actions/digital-twin-rag';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const result = await enhancedDigitalTwinQuery(message);

    if (!result.success) {
      return NextResponse.json({ error: result.answer }, { status: 500 });
    }

    return NextResponse.json({
      response: result.answer,
      metadata: result.metadata,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
