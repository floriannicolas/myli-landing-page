import { cn } from "@/lib/utils";

export default function PinContent({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative lg:absolute h-[40px] lg:h-auto bg-white flex justify-center items-center gap-2 py-2 px-4 rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
}
