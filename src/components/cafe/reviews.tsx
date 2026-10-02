import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/content/cafe";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(0);
  const review = reviews[index] ?? reviews[0];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  function go(next: number) {
    const total = reviews.length;
    setIndex((next + total) % total);
  }

  if (!review) return null;

  return (
    <section id="reviews" className="scroll-mt-20 bg-ink py-20 text-bg md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-accent-soft uppercase">From the tables</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">What guests keep saying.</h2>
        </Reveal>
        <div
          className="mt-10"
          role="region"
          aria-roledescription="carousel"
          aria-label="Guest reviews"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(event) => {
            startX.current = event.changedTouches[0]?.clientX ?? 0;
          }}
          onTouchEnd={(event) => {
            const end = event.changedTouches[0]?.clientX ?? 0;
            const delta = end - startX.current;
            if (delta > 48) go(index - 1);
            if (delta < -48) go(index + 1);
          }}
        >
          <p className="quote-mark text-7xl text-accent" aria-hidden="true">
            “
          </p>
          <blockquote className="max-w-3xl" aria-live="polite">
            <p className="font-display text-3xl leading-snug tracking-tight md:text-4xl">{review.quote}</p>
            <footer className="mt-6 text-sm tracking-wide text-accent-soft">{review.detail}</footer>
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line/40 text-bg"
              aria-label="Previous review"
              onClick={() => go(index - 1)}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line/40 text-bg"
              aria-label="Next review"
              onClick={() => go(index + 1)}
            >
              <ChevronRight className="size-5" />
            </button>
            <div className="ml-2 flex gap-2" role="tablist" aria-label="Choose a review">
              {reviews.map((item, dot) => (
                <button
                  key={item.quote}
                  type="button"
                  role="tab"
                  aria-selected={dot === index}
                  aria-label={`Show review ${dot + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    dot === index ? "w-7 bg-bg" : "w-2.5 bg-bg/40",
                  )}
                  onClick={() => go(dot)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
