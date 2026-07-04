import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-[#2D2420]/10 bg-white px-4 py-2 text-base transition-all placeholder:text-[#2D2420]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C56A3C]/50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };