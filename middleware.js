import { NextResponse } from "next/server";

export function middleware(request) {
  const maintenance = true; // Wenn du wieder live gehst: false setzen

  // Weiterleitung auf /maintenance, außer man ist schon dort
  if (maintenance && !request.nextUrl.pathname.startsWith("/maintenance")) {
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"], // Ignoriere Next.js Assets
};