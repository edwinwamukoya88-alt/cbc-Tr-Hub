import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/login", "/signup", "/forgot-password"];
const publicPrefixes = ["/api", "/_next", "/static", "/favicon.ico"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublic =
    publicPaths.includes(pathname) ||
    pathname === "/" ||
    publicPrefixes.some((p) => pathname.startsWith(p));

  if (isPublic) {
    return NextResponse.next();
  }

  const isAdminRoute = pathname.startsWith("/admin");

  const sessionCookie = request.cookies.get("__session")?.value;

  if (!sessionCookie && !isPublic) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute) {
    // Admin route protection - this should be supplemented by Firebase claims
    // For now, redirect to dashboard and let client-side handle role check
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
