import { codeInspectorPlugin } from 'code-inspector-plugin';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	webpack: (config, { dev }) => {
		if (dev) {
			config.plugins.push(codeInspectorPlugin({ bundler: 'webpack' }));
		}
		return config;
	},
	images: {
		unoptimized: true,
		domains: [],
	},
};

export default withNextIntl(nextConfig);
