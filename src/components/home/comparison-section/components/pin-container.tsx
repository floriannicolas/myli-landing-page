import { cn } from '@/lib/utils';

export default function PinContainer({
  children,
  className
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn('relative lg:absolute lg:h-[10px] lg:w-[10px]', className)}
    >
      {children}
    </div>
  );
}
