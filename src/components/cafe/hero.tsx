import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { cafe, photos } from "@/content/cafe";

const beans = [
  { className: "top-24 left-6 size-3", delay: "0s", duration: "8s" },
  { className: "top-40 right-10 size-4", delay: "1.2s", duration: "11s" },
  { className: "bottom-28 left-16 size-2", delay: "0.4s", duration: "9s" },
  { className: "top-16 right-1/3 size-2", delay: "2s", duration: "10s" },
  { className: "bottom-16 right-1/4 size-3", delay: "0.8s", duration: "12s" },
  { className: "top-1/2 left-8 size-2", delay: "1.6s", duration: "9.5s" },
];

export function Hero() {
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const photo = photoRef.current;
    if (!photo) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY, 700) * 0.16;
        photo.style.transform = `translate3d(0, calc(-8% + ${shift}px), 0) scale(1.06)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-8 md:pt-28 md:pb-12">
      {beans.map((bean) => (
        <span
          key={bean.className}
          className={`bean ${bean.className}`}
          style={{ animationDelay: bean.delay, animationDuration: bean.duration }}
        />
      ))}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="rise rise-1 text-xs font-semibold tracking-widest text-accent uppercase">
            {cafe.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <span className="rise rise-2 block">Good Food.</span>
            <span className="rise rise-3 mt-1 block text-accent italic">Good Vibes.</span>
            <span className="rise rise-4 mt-1 block">Good Moments.</span>
          </h1>
          <p className="rise rise-5 mt-6 max-w-md text-lg text-muted">
            A quiet cafe in Nehru Nagar for coffee, pizza, pasta, and the kind of afternoon you do not rush.
          </p>
          <div className="rise rise-6 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/menu" className="btn btn-fill">
              View Menu
            </Link>
            <a href={cafe.whatsapp} className="btn btn-ghost" target="_blank" rel="noreferrer">
              Order on WhatsApp
            </a>
          </div>
          <div className="rise rise-6 mt-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-sm font-semibold text-accent">
              {cafe.ratingLabel}
            </span>
            <span className="text-sm font-medium text-muted">{cafe.hoursLabel}</span>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="hero-frame">
            <img
              ref={photoRef}
              src={photos.hero}
              alt="Warm, sunlit interior of a neighborhood cafe"
              className="hero-photo"
              width={1200}
              height={1500}
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute top-6 left-8 flex gap-1.5" aria-hidden="true">
              <span className="steam h-8" style={{ animationDelay: "0s" }} />
              <span className="steam h-11" style={{ animationDelay: "0.6s" }} />
              <span className="steam h-7" style={{ animationDelay: "1.2s" }} />
            </div>
          </div>
          <figure className="absolute -bottom-6 -left-2 hidden w-36 overflow-hidden rounded-2xl border-4 border-surface shadow-soft sm:block md:-left-8">
            <img src={photos.latte} alt="A cup of coffee with soft foam" className="aspect-square w-full object-cover" width={400} height={400} />
          </figure>
          <p className="absolute right-4 bottom-4 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-semibold tracking-wide text-ink backdrop-blur-sm">
            100+ happy reviews
          </p>
        </div>
      </div>
    </section>
  );
}
