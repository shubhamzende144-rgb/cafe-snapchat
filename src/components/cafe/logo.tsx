import { cn } from "@/lib/cn";

export function CupMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5.5 8.2h10.2v6.1a4.1 4.1 0 0 1-4.1 4.1H9.6a4.1 4.1 0 0 1-4.1-4.1V8.2Z" />
      <path d="M15.7 9.4h1.5a2.3 2.3 0 0 1 0 4.6h-1.5" />
      <path d="M8.6 5.2c.35.85.15 1.45-.25 2" />
      <path d="M11.8 4.5c.35.85.15 1.45-.25 2" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-ink", className)}>
      <CupMark className={cn("size-7 shrink-0", markClassName)} />
      <span className="font-display text-xl leading-none tracking-tight">Cafe Snapchat</span>
    </span>
  );
}
