import { cn } from '@/lib/utils';

export default function PinBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute bottom-[-13px] left-[60px] hidden h-[148px] w-[1px] rotate-45 bg-white lg:block',
        className
      )}
    />
  );
}
