import { cn } from "@/lib/utils";

export default function CentralMiniContainer({
  children,
  className,
  fluidSize = true,
}: {
  children?: React.ReactNode;
  className?: string;
  fluidSize?: boolean;
}) {
  return (
    <div className={
      cn(
        "mx-auto max-w-[972px]",
        fluidSize && "max-w-[calc(100vw-16px*2)] md:max-w-[calc(.8333333333*100vw-.8333333333*16px*2+.8333333333*1rem)]",
        className
      )
    }>{children}</div>
  );
}
