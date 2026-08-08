import React from 'react';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY as string);

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Request body must be valid JSON.' }, { status: 400 });
  }

  const { name, contactNumber, email, message } = body as Record<string, unknown>;
  const trimmedName = isNonEmptyString(name) ? name.trim() : '';
  const trimmedMessage = isNonEmptyString(message) ? message.trim() : '';
  const trimmedContactNumber = isNonEmptyString(contactNumber) ? contactNumber.trim() : '';
  const trimmedEmail = isNonEmptyString(email) ? email.trim() : '';

  if (!trimmedName || !trimmedMessage) {
    return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
  }

  if (!trimmedContactNumber && !trimmedEmail) {
    return NextResponse.json({ error: 'Please provide either a contact number or an email address.' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [process.env.TEST_TO_ADDRESS ?? 'su@kail.au'],
      subject: `Contact Request from ${trimmedName}`,
      react: React.createElement(EmailTemplate, {
        name: trimmedName,
        contactNumber: trimmedContactNumber,
        email: trimmedEmail,
        message: trimmedMessage,
      }),
      ...(trimmedEmail ? { replyTo: trimmedEmail } : {}),
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ error: error?.message ?? error }, { status: 502 });
    }

    return NextResponse.json({ id: data?.id }, { status: 200 });
  } catch (err: unknown) {
    console.error('Unexpected error sending email:', err);
    const message = err && typeof err === 'object' && 'message' in err
      ? (err as any).message
      : String(err);

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
