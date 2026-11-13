import { NextResponse } from 'next/server';
import { ContactFormInputSchema } from '@/ai/schemas/contact-form';
import { COMPANY_INFO } from '@/lib/site-config';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = ContactFormInputSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message || 'Invalid form input.',
        },
        { status: 400 }
      );
    }

    const lead = parsed.data;
    const timestamp = new Date().toISOString();
    const subject = lead.productName
      ? `New Quote Request: ${lead.productName} - ${lead.name}`
      : `New Website Enquiry - ${lead.name}`;

    console.log('[LEAD_CAPTURED]', JSON.stringify({ timestamp, ...lead }));

    const deliveryResults: Promise<boolean>[] = [];

    // 1. Optional Google Sheets / Google Apps Script Webhook
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhookUrl) {
      deliveryResults.push(
        fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp,
            name: lead.name,
            email: lead.email,
            phone: lead.phone || '',
            hospitalName: lead.hospitalName || '',
            city: lead.city || '',
            productName: lead.productName || 'General Enquiry',
            sourcePage: lead.sourcePage || '/',
            message: lead.message,
          }),
        })
          .then((res) => res.ok)
          .catch((err) => {
            console.error('[GOOGLE_SHEETS_WEBHOOK_ERROR]', err);
            return false;
          })
      );
    }

    // 2. Optional Resend Email Delivery
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      deliveryResults.push(
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || 'Genuine Hospi Leads <onboarding@resend.dev>',
            to: [COMPANY_INFO.email, COMPANY_INFO.businessEmail],
            reply_to: lead.email,
            subject,
            text: [
              `New Lead Received (${timestamp})`,
              `Name: ${lead.name}`,
              `Email: ${lead.email}`,
              `Phone: ${lead.phone || 'Not provided'}`,
              `Hospital/Clinic: ${lead.hospitalName || 'Not provided'}`,
              `City/State: ${lead.city || 'Not provided'}`,
              `Product: ${lead.productName || 'General Enquiry'}`,
              `Source Page: ${lead.sourcePage || '/'}`,
              ``,
              `Message:`,
              lead.message,
            ].join('\n'),
          }),
        })
          .then((res) => res.ok)
          .catch((err) => {
            console.error('[RESEND_ERROR]', err);
            return false;
          })
      );
    }

    // 3. FormSubmit AJAX fallback (with proper JSON headers)
    deliveryResults.push(
      fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          phone: lead.phone || 'Not provided',
          hospital: lead.hospitalName || 'Not provided',
          city: lead.city || 'Not provided',
          product: lead.productName || 'General Enquiry',
          source: lead.sourcePage || '/',
          message: lead.message,
          _subject: subject,
          _template: 'table',
          _captcha: 'false',
        }),
      })
        .then(async (res) => {
          if (!res.ok) return false;
          const json = await res.json().catch(() => null);
          return Boolean(json?.success === 'true' || json?.success === true || res.ok);
        })
        .catch((err) => {
          console.error('[FORMSUBMIT_ERROR]', err);
          return false;
        })
    );

    const outcomes = await Promise.all(deliveryResults);
    const anyDelivered = outcomes.some(Boolean);

    return NextResponse.json({
      success: true,
      delivered: anyDelivered,
      message: 'Enquiry received successfully.',
    });
  } catch (error) {
    console.error('[LEAD_API_ERROR]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to process your request right now. Please contact us via WhatsApp or phone.',
      },
      { status: 500 }
    );
  }
}
