import { gallery } from "@/content/cafe";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">The room</p>
        <h2 className="mt-3 max-w-lg font-display text-4xl leading-tight tracking-tight md:text-5xl">
          Warm light. Full plates. Unhurried hours.
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="gallery-grid mt-10">
          {gallery.map((photo) => (
            <figure
              key={photo.alt}
              className={cn(
                "gallery-card relative overflow-hidden rounded-card bg-accent-soft shadow-soft",
                photo.tall && "is-tall",
              )}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-media absolute inset-0 h-full w-full object-cover"
                width={900}
                height={photo.tall ? 1200 : 900}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
