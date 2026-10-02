import { cafe, menu } from "@/content/cafe";
import { cn } from "@/lib/cn";
import { Reveal } from "./reveal";
import { scrollToSection } from "./scroll-link";

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">The menu</p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
              The cafe card, in full.
            </h2>
            <p className="max-w-sm text-sm text-muted">
              Same prices as the shop. Home delivery is on Zomato and Swiggy, or message us on WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="menu-jumps -mx-5 px-5 md:mx-0">
          {menu.map((category) => (
            <button
              key={category.id}
              type="button"
              className="rounded-full border border-line bg-bg px-3 py-2 text-sm font-semibold text-ink"
              onClick={() => scrollToSection(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-4 divide-y divide-line">
          {menu.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-32 py-8">
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display text-3xl tracking-tight">{category.label}</h3>
                {category.hasSizes ? (
                  <p className="size-labels grid shrink-0 grid-cols-2 text-right text-xs font-semibold tracking-widest text-muted uppercase">
                    <span>M</span>
                    <span>L</span>
                  </p>
                ) : null}
              </div>
              <ul className="mt-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className={cn("menu-row border-b border-line py-3", category.hasSizes && "is-sized")}
                  >
                    <span className="text-base text-ink">
                      {item.name}
                      {item.favorite ? (
                        <span className="ml-2 inline-block rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent align-middle">
                          Favorite
                        </span>
                      ) : null}
                    </span>
                    <span className="text-right font-display text-lg text-accent">{item.price}</span>
                    {category.hasSizes ? (
                      <span className="text-right font-display text-lg text-accent">{item.priceLarge}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <a href={cafe.whatsapp} className="btn btn-fill mt-2" target="_blank" rel="noreferrer">
          Order on WhatsApp
        </a>
      </div>
    </section>
  );
}
