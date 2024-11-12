'use client';

import { Select, Text } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';

export function AuthHeader() {
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center gap-2">
				<Image src={'/auth-logo.png'} alt="logo" width={20} height={20} />
				<Text size={'5'}>Chatbotable</Text>
			</div>

			<Select.Root value="en">
				<Select.Trigger className="w-28" />
				<Select.Content>
					<Select.Item value="zh">简体中文</Select.Item>
					<Select.Item value="en">English</Select.Item>
				</Select.Content>
			</Select.Root>
		</div>
	);
}
