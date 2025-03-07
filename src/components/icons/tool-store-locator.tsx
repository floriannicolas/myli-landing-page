import { cn } from "@/lib/utils";

export default function ToolStoreLocator({ className }: { className?: string }) {
  return (
    <svg
      className={cn("block h-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 33"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.033 12.722c0 6.084-4.932 11.017-11.017 11.017C6.932 23.739 2 18.806 2 12.722c0-6.085 4.933-11.017 11.017-11.017 6.085 0 11.017 4.932 11.017 11.017Zm-2.448 0a10.551 10.551 0 0 1-8.569-8.57 10.551 10.551 0 0 1-8.569 8.57 10.551 10.551 0 0 1 8.57 8.569 10.551 10.551 0 0 1 8.568-8.57Z"
        ></path>
        <path d="M25.965 28.46a5.605 5.605 0 0 0-5.605-5.606v1.49a5.605 5.605 0 0 0 5.605 5.606v-1.49Z"></path>
      </g>
    </svg>
  );
}
