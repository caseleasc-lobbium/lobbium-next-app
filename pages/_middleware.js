import { NextResponse } from "next/server";

export function middleware(req) {
  const maintenance = true; // 🔧 Auf false setzen, wenn du wieder online gehst

  if (maintenance && !req.nextUrl.pathname.startsWith("/maintenance")) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  return NextResponse.next();
}