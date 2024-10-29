import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n';
 
export default createMiddleware({
  // Dostępne locale
  locales: locales,
  // Domyślne locale
  defaultLocale: defaultLocale,
  // Zawsze pokazuj prefix w URL (np. /en/about)
  localePrefix: 'always'
});
 
export const config = {
  // Matcher ignorujący api/*, _next/*, itp.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};