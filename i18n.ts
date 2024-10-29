// i18n.ts (w głównym katalogu projektu)
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));

// Eksportujemy też stałe konfiguracyjne
export const locales = ['en', 'pl'] as const;
export const defaultLocale = 'en' as const;