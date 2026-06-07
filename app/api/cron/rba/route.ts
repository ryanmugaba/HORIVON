import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", message: "RBA cron endpoint placeholder for HORIVON." });
}
