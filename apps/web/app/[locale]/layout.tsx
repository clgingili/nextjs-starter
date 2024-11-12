import type React from 'react';

import { AppProvider } from '@/components/provider';
import { siteConfig } from '@/configs/site';
import { TolgeeNextProvider } from '@/tolgee/client';
import { ALL_LOCALES, getStaticData } from '@/tolgee/shared';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import '@radix-ui/themes/styles.css';
import './globals.css';

const geistSans = localFont({
	src: '../fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: '../fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: [],
	authors: [
		{
			name: 'chatbotable',
			url: 'https://chatbotable.ai',
		},
	],
	creator: 'chatbotable',
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: siteConfig.twitter,
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};

export default async function AppLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	if (!ALL_LOCALES.includes(locale)) {
		notFound();
	}

	// make sure you provide all the necessary locales
	const locales = await getStaticData([locale]);

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<TolgeeNextProvider locale={locale} locales={locales}>
					<AppProvider>{children}</AppProvider>
				</TolgeeNextProvider>
			</body>
		</html>
	);
}
