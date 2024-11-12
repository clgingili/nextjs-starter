import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { ALL_LOCALES, DEFAULT_LOCALE } from './tolgee/shared';

export default async function middleware(request: NextRequest) {
	const handleI18nRouting = createMiddleware({
		localePrefix: 'as-needed',
		locales: ALL_LOCALES,
		defaultLocale: DEFAULT_LOCALE,
	});

	return handleI18nRouting(request);
}

export const config = {
	matcher: [
		'/((?!_next|api|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
	],
};
