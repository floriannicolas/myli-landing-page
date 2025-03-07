import { cn } from "@/lib/utils";

export default function CentralContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-[calc(100vw-16px*2)] max-w-[calc(1800px - 16px*2)]",
        className
      )}
    >
      {children}
    </div>
  );
}
