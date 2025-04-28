import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zohocloud.ca",
      port: 587,
      secure: false,
      auth: {
        user: "contact@inovativai.com",
        pass: "z8*asPafst.##!.}w",
      },
    });

    await transporter.sendMail({
      from: "contact@inovativai.com",
      to: "contact@inovativai.com",
      subject: `New Contact Message`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
