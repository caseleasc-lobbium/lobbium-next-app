import { NextResponse } from "next/server";

export function middleware(request) {
  // Weiterleitung auf /maintenance, aber nur, wenn der Pfad nicht schon /maintenance ist
  if (!request.nextUrl.pathname.startsWith("/maintenance")) {
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}