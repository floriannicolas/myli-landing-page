import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

export default function Loader({
  variant = 'default',
  className,
  size = 'md'
}: {
  variant?: 'default' | 'global';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'text-muted-foreground flex h-full flex-1 items-center justify-center gap-2 p-2 font-light',
        variant === 'global' &&
          'text-muted-foreground flex min-h-svh w-full items-center justify-center gap-3 p-6 md:p-10',
        className
      )}
    >
      <LoaderCircle
        className={cn(
          'animate-spin',
          size === 'sm' && '!h-2 !w-2',
          size === 'md' && '!h-4 !w-4',
          size === 'lg' && '!h-6 !w-6'
        )}
      />
    </div>
  );
}
