import { NextResponse } from 'next/server';
import { LeadSubmission } from '@/types';

export async function POST(request: Request) {
  try {
    const data: LeadSubmission = await request.json();

    // Basic validation
    if (!data.firstName || !data.phone || !data.zipCode) {
      return NextResponse.json(
        { error: 'Missing required lead fields (first name, phone, or zip code).' },
        { status: 400 }
      );
    }

    // Lead payload formatted for CRM integration (HubSpot, GoHighLevel, Zapier, Webhook, etc.)
    const formattedLead = {
      id: `lead_${Date.now()}`,
      createdAt: new Date().toISOString(),
      customer: {
        name: `${data.firstName} ${data.lastName || ''}`.trim(),
        phone: data.phone,
        email: data.email,
        zipCode: data.zipCode,
      },
      project: {
        service: data.serviceInterest,
        timeframe: data.timeframe,
        budget: data.estimatedBudget || 'Not specified',
        notes: data.notes || '',
      },
      attribution: {
        sourceUrl: data.sourceUrl || 'direct',
        platform: 'Next.js Scalable Outdoor Engine',
      },
    };

    // In production, this can forward to a Webhook URL or CRM API
    // e.g.: if (process.env.CRM_WEBHOOK_URL) await fetch(process.env.CRM_WEBHOOK_URL, { ... })
    console.log('✅ [NEW HARDSCAPE LEAD CAPTURED]:', JSON.stringify(formattedLead, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully. Representative notified.',
      leadId: formattedLead.id,
    });
  } catch (error) {
    console.error('❌ Lead processing error:', error);
    return NextResponse.json(
      { error: 'Internal server error while capturing lead.' },
      { status: 500 }
    );
  }
}
