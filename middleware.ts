import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/dashboard", "/radar", "/copilot", "/settings"];

export function middleware(request: NextRequest) {
  if (protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    const token = request.cookies.get("next-auth.session-token");
    if (!token) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/radar/:path*", "/copilot/:path*", "/settings/:path*"],
};
