import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", message: "ABS cron endpoint placeholder for HORIVON." });
}
