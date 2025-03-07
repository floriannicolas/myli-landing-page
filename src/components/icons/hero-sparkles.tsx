import { cn } from "@/lib/utils"

export default function HeroSparkles({ className }: { className?: string }) {
  return (
    <svg
      className={cn('block h-4', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#a)">
        <path
          d="M16.777 1.368a.5.5 0 0 1 .946 0l.87 2.52a.5.5 0 0 0 .288.302l2.447.97a.5.5 0 0 1 0 .93l-2.447.97a.5.5 0 0 0-.288.301l-.87 2.52a.5.5 0 0 1-.946 0l-.87-2.52a.5.5 0 0 0-.288-.301l-2.447-.97a.5.5 0 0 1 0-.93l2.447-.97a.5.5 0 0 0 .288-.301l.87-2.52Z"
          fill="url(#b)"
        ></path>
        <path
          d="M18.65 12.706a.5.5 0 0 1 .95 0l.973 2.98a.5.5 0 0 0 .282.306l2.796 1.172a.5.5 0 0 1 0 .922l-2.796 1.172a.5.5 0 0 0-.282.306l-.973 2.98a.5.5 0 0 1-.95 0l-.973-2.98a.5.5 0 0 0-.282-.306L14.6 18.086a.5.5 0 0 1 0-.922l2.795-1.172a.5.5 0 0 0 .282-.306l.973-2.98Z"
          fill="url(#c)"
        ></path>
        <path
          d="M7.404 4.329a.5.5 0 0 1 .942 0l1.782 5.024a.5.5 0 0 0 .29.299l4.874 1.882a.5.5 0 0 1 0 .932l-4.873 1.882a.5.5 0 0 0-.291.3L8.346 19.67a.5.5 0 0 1-.942 0l-1.782-5.024a.5.5 0 0 0-.29-.299L.457 12.466a.5.5 0 0 1 0-.932l4.873-1.882a.5.5 0 0 0 .291-.3L7.404 4.33Z"
          fill="url(#d)"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="22.46"
          y1="0"
          x2="11.943"
          y2=".071"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B59C4"></stop>
          <stop offset="1" stopColor="#3D77D3"></stop>
        </linearGradient>
        <linearGradient
          id="c"
          x1="24.707"
          y1="11.25"
          x2="13.439"
          y2="11.322"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B59C4"></stop>
          <stop offset="1" stopColor="#3D77D3"></stop>
        </linearGradient>
        <linearGradient
          id="d"
          x1="16.434"
          y1="3"
          x2="-.844"
          y2="3.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9B59C4"></stop>
          <stop offset="1" stopColor="#3D77D3"></stop>
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
