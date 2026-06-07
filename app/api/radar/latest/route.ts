import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    port: { avg_wait_time: 3.8, updated: "2026-06-07" },
    rba: { cash_rate: 4.35, updated: "2026-06-07" },
    flights: { arrivals: 1255, updated: "2026-06-07" },
    employment: { unemployment_rate: 4.1, updated: "2026-06-07" },
  });
}
