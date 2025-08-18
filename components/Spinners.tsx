// components/Spinner.tsx
"use client";

import Image from "next/image";
import clsx from "clsx";

type Variant = "ring" | "dual" | "dots" | "bars" | "pulse" | "conic" | "logo";
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-5 w-5",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

export default function Spinner({
  variant = "ring",
  size = "md",
  className,
  label = "Loading…",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  if (variant === "ring") {
    return (
      <span
        aria-label={label}
        role="status"
        className={clsx(
          "inline-block rounded-full border-2 border-current border-t-transparent animate-spin",
          sizes[size],
          className
        )}
      />
    );
  }

  if (variant === "dual") {
    return (
      <span
        aria-label={label}
        role="status"
        className={clsx("relative inline-block", sizes[size], className)}
      >
        <span className="absolute inset-0 rounded-full border-2 border-current opacity-30" />
        <span className="absolute inset-0 rounded-full border-2 border-t-transparent animate-spin" />
      </span>
    );
  }

  if (variant === "dots") {
    return (
      <span role="status" aria-label={label} className="inline-flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-0.2s]" />
        <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-0.1s]" />
        <span className="h-2 w-2 rounded-full bg-current animate-bounce" />
      </span>
    );
  }

  if (variant === "bars") {
    return (
      <span role="status" aria-label={label} className="inline-flex items-end gap-1">
        <span className="h-1 w-1.5 bg-current animate-[pulse_0.8s_ease-in-out_infinite] rounded-[1px]" />
        <span className="h-2.5 w-1.5 bg-current animate-[pulse_0.8s_ease-in-out_infinite] [animation-delay:0.1s] rounded-[1px]" />
        <span className="h-4 w-1.5 bg-current animate-[pulse_0.8s_ease-in-out_infinite] [animation-delay:0.2s] rounded-[1px]" />
        <span className="h-2.5 w-1.5 bg-current animate-[pulse_0.8s_ease-in-out_infinite] [animation-delay:0.3s] rounded-[1px]" />
        <span className="h-1 w-1.5 bg-current animate-[pulse_0.8s_ease-in-out_infinite] [animation-delay:0.4s] rounded-[1px]" />
      </span>
    );
  }

  if (variant === "pulse") {
    return (
      <span
        role="status"
        aria-label={label}
        className={clsx(
          "inline-block rounded-full bg-current/20 animate-ping",
          { "h-3 w-3": size === "sm", "h-4 w-4": size === "md", "h-6 w-6": size === "lg" },
          className
        )}
      />
    );
  }

  if (variant === "conic") {
    // conic gradient ring with hole
    return (
      <span
        role="status"
        aria-label={label}
        className={clsx(
          "inline-block animate-spin rounded-full",
          sizes[size],
          "bg-[conic-gradient(var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-blue-500",
          "mask-[radial-gradient(farthest-side,transparent_60%,black_62%)]"
        )}
      />
    );
  }

  // variant === "logo" — spins a small logo mark
  return (
    <span role="status" aria-label={label} className={clsx("inline-flex items-center gap-2", className)}>
      <span className={clsx("relative inline-block animate-spin rounded-full", sizes[size])}>
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-pink-500" />
        <span className="absolute inset-0 rounded-full border-2 border-transparent border-l-purple-500" />
      </span>
      <span className="sr-only">{label}</span>
    </span>
  );
}
