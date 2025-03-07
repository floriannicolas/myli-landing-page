import { cn } from "@/lib/utils";

export default function Star({ className }: { className?: string }) {
  return (
    <svg
      className={cn("block h-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 17"
    >
      <g clipPath="url(#a)">
        <path d="M8.87 1.121a.97.97 0 0 0-1.745 0L5.177 5.13l-4.351.642a.968.968 0 0 0-.54 1.648l3.158 3.124-.746 4.415a.973.973 0 0 0 1.415 1.018l3.888-2.075 3.887 2.075a.97.97 0 0 0 1.415-1.018l-.748-4.415 3.157-3.124a.968.968 0 0 0-.54-1.648L10.82 5.13 8.87 1.12Z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path
            fill="#fff"
            transform="translate(0 .333)"
            d="M0 0h16v16H0z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}
