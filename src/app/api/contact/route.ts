import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactEmail } from '@/emails/ContactEmail';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }


    // Render email using React Email
    const html = await render(
      React.createElement(ContactEmail, { name, email, phone, message })
    );

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'andrewnguyen.nsw@gmail.com',
      subject: 'New Contact Form Submission from Powerhouse Property Hunter',
      replyTo: email as string,
      html,
    });

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
