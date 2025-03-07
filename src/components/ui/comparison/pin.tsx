import { cn } from "@/lib/utils";

export default function Pin({ className }: { className?: string }) {
  return (
    <div
      className={cn(        
        "hidden lg:flex absolute rounded-full w-9 h-9 top-[-13px] left-[-13px] bg-white/60 justify-center items-center",
        className
      )}
    >
      <div className="rounded-full w-[10px] h-[10px] bg-white" />
    </div>
  );
}
