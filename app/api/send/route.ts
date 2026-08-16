import React from 'react';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const RECAPTCHA_MIN_SCORE = 0.5;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

async function verifyRecaptcha(token: string, action: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY?.trim();

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not configured.');
    return false;
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  });

  const result = await response.json().catch(() => null) as
    | { success?: boolean; score?: number; action?: string }
    | null;

  if (!result?.success || typeof result.score !== 'number') {
    return false;
  }

  return result.score >= RECAPTCHA_MIN_SCORE && result.action === action;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Request body must be valid JSON.' }, { status: 400 });
  }

  const { name, contactNumber, email, message, recaptchaToken } = body as Record<string, unknown>;
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

  if (!isNonEmptyString(recaptchaToken) || !(await verifyRecaptcha(recaptchaToken, 'contact_form'))) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 });
  }

  if (!resend) {
    return NextResponse.json({ error: 'Email sending is not configured.' }, { status: 503 });
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
