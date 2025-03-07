import { cn } from "@/lib/utils";

export default function PinContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative lg:absolute lg:w-[10px] lg:h-[10px]",
        className
      )}
    >
      {children}
    </div>
  );
}
