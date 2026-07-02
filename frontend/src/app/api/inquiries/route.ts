import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // 1. Start with global memory
    let inquiries = (global as any).inquiries || [];

    // 2. If memory is empty (e.g. serverless cold start), try to read from the local file if it exists
    if (inquiries.length === 0) {
      try {
        const filePath = path.join(process.cwd(), 'inquiries.json');
        if (fs.existsSync(filePath)) {
          const fileData = fs.readFileSync(filePath, 'utf8');
          inquiries = JSON.parse(fileData);
          (global as any).inquiries = inquiries; // Restore to memory
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
