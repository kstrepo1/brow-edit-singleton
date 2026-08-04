import React from 'react';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST() {
  // NOTE: If this endpoint accepts a request body in the future, parse it from the request
  try {
    // Use the SDK's data/error response pattern instead of relying on thrown exceptions.
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [process.env.TEST_TO_ADDRESS ?? 'su@kail.au'],
      subject: 'New Website Form Submission 📧',
      // Use React.createElement to avoid JSX in a .ts file
      react: React.createElement(EmailTemplate, { firstName: 'John' }),
    });

    if (error) {
      console.error('Resend API error:', error);
      // Surface the SDK error with an appropriate status code
      return NextResponse.json({ error: error?.message ?? error }, { status: 502 });
    }

    return NextResponse.json({ id: data?.id }, { status: 200 });
  } catch (err: unknown) {
    // Catch unexpected thrown/network errors
    console.error('Unexpected error sending email:', err);
    const message = err && typeof err === 'object' && 'message' in err
      ? (err as any).message
      : String(err);

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
