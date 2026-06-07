import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    insights: [
      "Your cash flow will drop below $4,200 on June 14th. If you pay your supplier invoice ($3,800) on June 15th as scheduled, you risk an overdraft. Consider delaying to June 16th or drawing from your $12,000 buffer.",
      "Receivables from Greenfields Ltd are expected to arrive June 12th, giving you a narrow recovery window before your next lease top-up. Keep supplier payment timing flexible to preserve runway.",
      "New trade opportunities are emerging in freight and procurement, but your current runway is tight. Delay discretionary spend and prioritize the $12,000 buffer to avoid overdraft risk.",
    ],
  });
}
