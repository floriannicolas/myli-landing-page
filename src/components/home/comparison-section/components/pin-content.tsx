import { cn } from '@/lib/utils';

export default function PinContent({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex h-[40px] items-center justify-center gap-2 rounded-full bg-white px-4 py-2 lg:absolute lg:h-auto',
        className
      )}
    >
      {children}
    </div>
  );
}
