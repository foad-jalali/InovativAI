import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    const filePath = path.join(process.cwd(), 'templates', 'contact-template.html');
    const htmlTemplateRaw = await readFile(filePath, 'utf8');
    
    const htmlTemplate = htmlTemplateRaw
      .replace('{{firstName}}', firstName)
      .replace('{{lastName}}', lastName)
      .replace('{{email}}', email)
      .replace('{{message}}', message);
      
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
      html: htmlTemplate,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
