import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Initialize global inquiries array if it doesn't exist
if (!(global as any).inquiries) {
  (global as any).inquiries = [];
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate that all required fields are present
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const newInquiry = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      subject,
      message,
      date: new Date().toISOString(),
    };

    // Save to global memory
    (global as any).inquiries.unshift(newInquiry);

    // Also attempt to save to a local file for persistence during local development
    try {
      const filePath = path.join(process.cwd(), 'inquiries.json');
      let localInquiries = [];
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, 'utf8');
        localInquiries = JSON.parse(fileData);
      }
      localInquiries.unshift(newInquiry);
      fs.writeFileSync(filePath, JSON.stringify(localInquiries, null, 2), 'utf8');
    } catch (fsError) {
      // Ignore filesystem errors (e.g., when running in read-only Vercel serverless environment)
      console.log('Filesystem write skipped or not supported in this environment.');
    }

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || '', // your SMTP username
        pass: process.env.SMTP_PASS || '', // your SMTP password
      },
    });

    // Only attempt to send email if SMTP credentials are set
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`, // sender address
        to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER, // list of receivers
        subject: `New Contact Form Submission: ${subject}`, // Subject line
        text: `You have received a new message from your website contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        replyTo: email,
      };
      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ message: 'Inquiry saved successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Inquiry saving error:', error);
    return NextResponse.json({ message: 'Failed to save inquiry.' }, { status: 500 });
  }
}

