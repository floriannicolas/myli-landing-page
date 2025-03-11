import { cn } from "@/lib/utils";

export default function CentralContainer({
  children,
  className,
  isMini = false,
}: {
  children?: React.ReactNode;
  className?: string;
  isMini?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-screen max-w-[calc(1800px+16px*2)] px-4",
        className,
        isMini && "lg:px-[135px]"
      )}
    >
      {children}
    </div>
  );
}
