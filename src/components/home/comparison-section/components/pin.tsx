import { cn } from '@/lib/utils';

export default function Pin({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'absolute top-[-13px] left-[-13px] hidden h-9 w-9 items-center justify-center rounded-full bg-white/60 lg:flex',
        className
      )}
    >
      <div className="h-[10px] w-[10px] rounded-full bg-white" />
    </div>
  );
}
