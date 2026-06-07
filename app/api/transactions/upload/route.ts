import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ status: "ok", message: "HORIVON CSV upload placeholder." });
}
