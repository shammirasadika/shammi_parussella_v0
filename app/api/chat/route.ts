import { NextResponse } from 'next/server';
import { digitalTwinQuery } from '@/lib/digital-twin-rag';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Query the digital twin RAG system
    const result = await digitalTwinQuery(message);

    if (!result.success) {
      return NextResponse.json(
        { error: result.answer },
        { status: 500 }
      );
    }

    return NextResponse.json({
      response: result.answer,
      resultsFound: result.resultsFound,
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    );
  }
}
