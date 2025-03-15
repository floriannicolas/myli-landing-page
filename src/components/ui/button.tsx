import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden relative font-semibold hover:text-white transition-all duration-350 hover:after:bg-transparent after:content-[''] after:duration-350 after:transition-transform hover:after:transition-none after:absolute after:cursor-pointer after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:translate-y-[-100%] hover:after:translate-y-0 before:content-[''] before:duration-450 before:transition-none hover:before:transition-transform before:absolute before:cursor-pointer before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:translate-y-full hover:before:translate-y-0",
  {
    variants: {
      variant: {
        default:
          'bg-[#171b26] text-white after:bg-[#363b4b] before:bg-[#363b4b]',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border border-[#e1e2e9] bg-transparent text-[#171b26] after:bg-[#171b26] before:bg-[#171b26] hover:text-white',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'bg-transparent text-[#171b26] after:bg-[#f5f6f8] before:bg-[#f5f6f8] hover:text-[#171b26]',
        link: 'text-primary underline-offset-4 hover:underline',
        yellow:
          'bg-[#ffce67] text-[#171b26] after:bg-[#171b26] before:bg-[#171b26]',
        'yellow-hover-white':
          'bg-[#ffce67] text-[#171b26] after:bg-white before:bg-white hover:text-[#171b26]',
        'dark-hover-white':
          'bg-[#171b26] text-[#fafafa] after:bg-[#fafafa] before:bg-[#fafafa] hover:text-[#171b26] tracking-[.01em]'
      },
      size: {
        default: 'h-10 px-4 has-[>svg]:px-3',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-14 px-6 text-base has-[>svg]:px-4',
        xl: 'py-[1.125rem] px-8 font-semibold text-lg leading-[28px]',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{
      className?: string;
      children?: React.ReactNode;
    }>;

    return React.cloneElement(child, {
      ...props,
      className: cn(
        buttonVariants({ variant, size, className }),
        child.props.className
      ),
      children: (
        <span className="relative z-2 select-none">{child.props.children}</span>
      )
    });
  }

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="relative z-2 select-none">{children}</span>
    </button>
  );
}

export { Button, buttonVariants };
