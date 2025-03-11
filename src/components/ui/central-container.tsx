import { cn } from "@/lib/utils";

export default function CentralContainer({
  children,
  className,
  isMini = false,
  withPadding = true,
}: {
  children?: React.ReactNode;
  className?: string;
  isMini?: boolean;
  withPadding?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-screen max-w-[1800px]",
        className,
        withPadding && "px-4 max-w-[1832px]",
        withPadding && isMini && "lg:px-[135px]"
      )}
    >
      {children}
    </div>
  );
}
