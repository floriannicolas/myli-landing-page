import { cn } from "@/lib/utils";
import React from "react";

type MagicButtonProps = {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type Size = "base" | "big";
type Variant = "base" | "transparent-gray" | "hover-white";

const MagicButton = React.forwardRef<HTMLButtonElement, MagicButtonProps>(
  (
    {
      children,
      className,
      asChild = false,
      variant = "base",
      size = "base",
      ...props
    },
    ref
  ) => {
    const baseClass = cn(
      "overflow-hidden relative cursor-pointer rounded-full bg-[#ffce67] block text-[#171b26] px-4 font-semibold text-sm hover:text-white transition-all",
      "after:bg-[#171b26] hover:after:bg-transparent after:content-[''] after:transition-transform hover:after:transition-none",
      "after:absolute after:cursor-pointer after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:translate-y-[-100%] hover:after:translate-y-0",
      "before:bg-[#171b26] before:content-[''] before:transition-none hover:before:transition-transform",
      "before:absolute before:cursor-pointer before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:translate-y-full hover:before:translate-y-0",
      "leading-[40px]",
      variant === "transparent-gray" &&
        "bg-transparent after:bg-[#f5f6f8] before:bg-[#f5f6f8] hover:text-[#171b26]",
      variant === "hover-white" &&
        "after:bg-white before:bg-white hover:text-[#171b26]",
      size === "big" &&
        "py-[1.125rem] px-8 font-semibold text-lg leading-[28px]",
      className
    );

    if (asChild && React.isValidElement(children)) {
      // @typescript-eslint/no-explicit-any
      const child = children as React.ReactElement<any>;

      return React.cloneElement(child, {
        ...props,
        className: cn(baseClass, child.props.className),
        children: <span className="relative z-10">{child.props.children}</span>,
      });
    }

    return (
      <button ref={ref} className={baseClass} {...props}>
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

MagicButton.displayName = "MagicButton";

export default MagicButton;
