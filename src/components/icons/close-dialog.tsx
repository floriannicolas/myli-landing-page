import { cn } from '@/lib/utils';

export default function CloseDialog({ className }: { className?: string }) {
  return (
    <svg
      className={cn('block h-4 z-2', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 13"
    >
      <rect
        x="1.40332"
        y="1.43262"
        width="14"
        height="1"
        rx="0.5"
        transform="rotate(45 1.40332 1.43262)"
      ></rect>
      <rect
        x="0.696289"
        y="11.332"
        width="14"
        height="1"
        rx="0.5"
        transform="rotate(-45 0.696289 11.332)"
      ></rect>
    </svg>
  );
}
