import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.redirect(new URL("/maintenance", request.url));
}