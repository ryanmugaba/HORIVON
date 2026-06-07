import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "ok", insight: "HORIVON AI insight placeholder." });
}
