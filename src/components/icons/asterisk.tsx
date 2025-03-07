import { cn } from '@/lib/utils';

export default function Asterisk({ className }: { className?: string }) {
  return (
    <svg
      className={cn('block h-4', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 25"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 4.376a1 1 0 1 1 2 0V8.96a1 1 0 0 0 1.5.866l4.384-2.531a1 1 0 1 1 1 1.732l-4.51 2.603a1 1 0 0 0 0 1.732l4.098 2.366a1 1 0 0 1-1 1.732l-3.973-2.294a1 1 0 0 0-1.5.866v4.346a1 1 0 0 1-2 0v-4.49a1 1 0 0 0-1.5-.866l-3.472 2.005a1 1 0 1 1-1-1.732l3.348-1.933a1 1 0 0 0 0-1.732l-3.76-2.17a1 1 0 1 1 1-1.732L9.75 9.969a1 1 0 0 0 1.5-.866V4.376Z"
      ></path>
    </svg>
  );
}
