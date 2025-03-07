import { cn } from "@/lib/utils";

export default function PinBar({ className }: { className?: string }) {
  return (
    <div className={cn(
      "hidden lg:block absolute h-[148px] w-[1px] bg-white rotate-45 bottom-[-13px] left-[60px]",
      className
    )} />
  );
}
