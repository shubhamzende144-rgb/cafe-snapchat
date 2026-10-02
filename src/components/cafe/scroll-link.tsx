import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export function ScrollLink({
  id,
  className,
  children,
  onNavigate,
}: {
  id: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    onNavigate?.();
    scrollToSection(id);
  }

  return (
    <a href={`#${id}`} className={cn(className)} onClick={onClick}>
      {children}
    </a>
  );
}
