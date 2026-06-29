import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate that all required fields are present
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your SMTP username
        pass: process.env.SMTP_PASS, // your SMTP password
      },
    });

    // Define email options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.RECIPIENT_EMAIL, // list of receivers
      subject: `New Contact Form Submission: ${subject}`, // Subject line
      text: `You have received a new message from your website contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      replyTo: email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
