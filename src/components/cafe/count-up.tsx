import { useEffect, useRef, useState } from "react";

export function CountUp({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) => (decimals ? n.toFixed(decimals) : String(Math.round(n)));
  const [text, setText] = useState(() => (decimals ? "0.0" : "0"));
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setText(format(value));
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1200;
        const t0 = performance.now();
        let frame = 0;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - t0) / duration);
          const eased = 1 - (1 - progress) ** 3;
          setText(format(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
        return () => cancelAnimationFrame(frame);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [decimals, value]);

  return (
    <span ref={ref}>
      {text}
      {suffix}
    </span>
  );
}
