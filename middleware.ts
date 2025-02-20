import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

export function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  const negotiator = new Negotiator({
    headers: { "accept-language": acceptLanguage },
  });
  const languages = negotiator.languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  console.log(pathname);
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  console.log(locale);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"], // Omitir rutas internas
};
