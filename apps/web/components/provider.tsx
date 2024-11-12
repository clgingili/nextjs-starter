'use client';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, useTheme } from 'next-themes';
import type React from 'react';
import { Toaster } from 'sonner';

export function AppProvider({ children }: React.PropsWithChildren) {
	const { theme } = useTheme();
	const appearance = theme as 'dark' | 'inherit' | 'light' | undefined;

	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			<Theme accentColor="violet" appearance={appearance}>
				{children}
			</Theme>
			<Toaster richColors duration={5000} />
		</ThemeProvider>
	);
}
