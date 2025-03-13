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
      default: 'bg-background rounded-[2rem] p-6 lg:p-10 shadow-lg',
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
        className="fixed inset-0 z-60 overflow-y-scroll max-h-screen"
        {...props}
      >
        <div className="relative w-full min-h-screen flex items-center justify-center py-18 lg:py-12 px-12 lg:px-18">
          <div className={cn(dialogContentVariants({ variant, className }))}>
            <div className={cn(dialogContentInnerVariants({ variant }))}>
              {children}
            </div>
            <DialogPrimitive.Close className="absolute -top-14 lg:top-0 right-0 lg:-right-14 h-10 group aspect-square rounded-full flex items-center justify-center overflow-hidden bg-[#ffce67] text-[#171b26] font-semibold hover:text-white transition-all duration-350 after:bg-[#171b26] hover:after:bg-transparent after:content-[''] after:duration-350 after:transition-transform hover:after:transition-none after:absolute after:cursor-pointer after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:translate-y-[-100%] hover:after:translate-y-0 before:bg-[#171b26] before:content-[''] before:duration-450 before:transition-none hover:before:transition-transform before:absolute before:cursor-pointer before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:translate-y-full hover:before:translate-y-0">
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
