import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import connectDB from "@/lib/db";
import Inquiry from "@/models/Inquiry";

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
    // Try fetching from MongoDB first
    try {
      const db = await connectDB();
      if (db) {
        const dbInquiries = await Inquiry.find({}).sort({ date: -1 }).lean();
        const inquiries = (dbInquiries as Array<{
          _id: import("mongoose").Types.ObjectId;
          name: string;
          email: string;
          subject: string;
          message: string;
          date?: string | Date;
        }>).map((inq) => ({
          id: inq._id.toString(),
          name: inq.name,
          email: inq.email,
          subject: inq.subject,
          message: inq.message,
          date: inq.date ? new Date(inq.date).toISOString() : new Date().toISOString(),
        }));
        return NextResponse.json(inquiries, { status: 200 });
      }
    } catch (dbError) {
      console.error("MongoDB fetch error, falling back to local storage:", dbError);
    }

    // 1. Start with global memory (fallback)
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
