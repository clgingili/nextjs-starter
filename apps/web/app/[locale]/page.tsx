'use client';

import { Button } from '@radix-ui/themes';
import { toast } from 'sonner';

export default function Home() {
	return (
		<div className="flex gap-2 p-10">
			<Button
				onClick={() => {
					toast('hello');
				}}
			>
				Click me
			</Button>
			<Button variant="outline" color="gray">
				Click me
			</Button>
		</div>
	);
}
