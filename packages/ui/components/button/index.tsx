import { cn } from '@agentable/utils';
import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { type VariantProps, tv } from 'tailwind-variants';

const button = tv({
	base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/90',
			destructive:
				'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline:
				'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline',
		},
		size: {
			sm: 'h-6 px-2',
			md: 'h-8 px-2.5 py-2',
			lg: 'h-10 px-4',
			icon: 'p-0',
		},
		isMenu: {
			true: 'h-auto w-full cursor-pointer justify-start',
		},
		shape: {
			square: 'rounded',
			circle: 'rounded-full',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'md',
		shape: 'square',
	},
});

export type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = {
	asChild?: boolean;
	loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	ButtonVariants;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			className,
			variant,
			shape,
			size,
			asChild = false,
			children,
			loading,
			...restProps
		} = props;
		const Comp = asChild ? Slot : 'button';

		return (
			<Comp
				className={cn(button({ variant, size, className, shape }))}
				ref={ref}
				disabled={loading}
				{...restProps}
			>
				{loading ? <Loader2 className="mr-2 size-4 animate-spin" /> : null}
				{children}
			</Comp>
		);
	},
);
Button.displayName = 'Button';

export { Button, button as buttonVariants, button };
