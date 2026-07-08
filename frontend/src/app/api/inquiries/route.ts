import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface CustomGlobal {
  inquiries?: Array<{
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
  }>;
}

const globalRef = global as unknown as CustomGlobal;

export async function GET() {
  try {
    // 1. Start with global memory
    let inquiries = globalRef.inquiries || [];

    // 2. If memory is empty (e.g. serverless cold start), try to read from the local file if it exists
    if (inquiries.length === 0) {
      try {
        const filePath = path.join(process.cwd(), 'inquiries.json');
        if (fs.existsSync(filePath)) {
          const fileData = fs.readFileSync(filePath, 'utf8');
          inquiries = JSON.parse(fileData);
          globalRef.inquiries = inquiries; // Restore to memory
        }
      } catch (fsError) {
        console.error('Failed to read persistent inquiries file:', fsError);
      }
    }

    return NextResponse.json(inquiries, { status: 200 });
  } catch (error) {
    console.error('Fetch inquiries error:', error);
    return NextResponse.json({ message: 'Failed to fetch inquiries' }, { status: 500 });
  }
}
