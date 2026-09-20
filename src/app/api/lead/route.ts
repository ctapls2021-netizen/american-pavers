import { NextResponse } from 'next/server';
import { LeadSubmission } from '@/types';

export async function POST(request: Request) {
  try {
    const data: LeadSubmission = await request.json();

    // Basic validation
    if (!data.firstName || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required lead fields (first name or phone).' },
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
        zipCode: data.zipCode || 'California',
      },
      project: {
        service: data.serviceInterest,
        timeframe: data.timeframe,
        budget: data.estimatedBudget || 'Not specified',
        notes: data.notes || '',
      },
      attribution: {
        sourceUrl: data.sourceUrl || 'direct',
        platform: 'American Pavers & Turf Web Engine',
      },
    };

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your estimate request has been received.',
      leadId: formattedLead.id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}
