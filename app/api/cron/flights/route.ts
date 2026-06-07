import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", message: "Flights cron endpoint placeholder for HORIVON." });
}
