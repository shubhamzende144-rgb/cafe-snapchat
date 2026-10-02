import { marqueeItems } from "@/content/cafe";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee-wrap py-4" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center px-4 font-display text-xl md:text-2xl">
            {item}
            <span className="ml-8 text-accent">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
