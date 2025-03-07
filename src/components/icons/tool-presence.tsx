import { cn } from "@/lib/utils";

export default function ToolPresence({ className }: { className?: string }) {
  return (
    <svg
      className={cn("block h-4", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 33"
    >
      <g>
        <path d="M4.847 12.379a9.325 9.325 0 0 1 9.325-9.325h7.336V14.82a9.325 9.325 0 0 1-9.325 9.325H4.847V12.379Z"></path>
        <path d="M9.173 25.95v3.398h17.518V7.172h-3.376v7.589c0 6.18-5.01 11.19-11.19 11.19H9.172Z"></path>
        <path d="M9.173 24.086h2.951a9.325 9.325 0 0 0 9.326-9.325V7.171h-3.277a9 9 0 0 0-9 9v7.914Z"></path>
      </g>
    </svg>
  );
}
