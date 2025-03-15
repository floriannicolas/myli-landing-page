'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import CloseDialog from '../icons/close-dialog';

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-[#171B26]/80',
        className
      )}
      {...props}
    />
  );
}

const dialogContentVariants = cva(
  'data-[state=open]:animate-in data-[state=closed]:animate-out relative data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 grid w-full max-w-[calc(100%-2rem)] duration-200',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        ghost: 'bg-transparent'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const dialogContentInnerVariants = cva('w-full gap-4', {
  variants: {
    variant: {
      default: 'bg-background rounded-[2rem] p-4 sm:p-6 lg:p-10 shadow-lg',
      ghost: 'bg-transparent'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

function DialogContent({
  className,
  children,
  variant,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> &
  VariantProps<typeof dialogContentVariants>) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className="fixed inset-0 z-60 max-h-screen overflow-y-scroll"
        {...props}
      >
        <div className="relative flex min-h-screen w-full items-center justify-center px-4 py-18 sm:px-8 md:px-12 lg:px-18 lg:py-12">
          <div className={cn(dialogContentVariants({ variant, className }))}>
            <div className={cn(dialogContentInnerVariants({ variant }))}>
              {children}
            </div>
            <DialogPrimitive.Close className="group absolute -top-14 right-0 flex aspect-square h-10 items-center justify-center overflow-hidden rounded-full bg-[#ffce67] font-semibold text-[#171b26] transition-all duration-350 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:translate-y-full before:cursor-pointer before:rounded-full before:bg-[#171b26] before:transition-none before:duration-450 before:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:translate-y-[-100%] after:cursor-pointer after:rounded-full after:bg-[#171b26] after:transition-transform after:duration-350 after:content-[''] hover:text-white hover:before:translate-y-0 hover:before:transition-transform hover:after:translate-y-0 hover:after:bg-transparent hover:after:transition-none lg:top-0 lg:-right-14">
              <CloseDialog className="fill-black group-hover:fill-white" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </div>
        </div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
};
