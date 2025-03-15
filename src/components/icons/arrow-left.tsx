import { cn } from '@/lib/utils';

export default function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      className={cn('block h-4 rotate-180', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
    >
      <path d="M11.293 4.67a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.415l5.293-5.293H5a1 1 0 1 1 0-2h11.586l-5.293-5.292a1 1 0 0 1 0-1.415Z"></path>
    </svg>
  );
}
