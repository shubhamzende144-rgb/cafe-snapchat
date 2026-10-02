import { photos } from "@/content/cafe";
import { CountUp } from "./count-up";
import { Reveal } from "./reveal";

const stats = [
  { value: 4.8, decimals: 1, suffix: "", label: "Google rating" },
  { value: 100, decimals: 0, suffix: "+", label: "Happy reviews" },
  { value: 7, decimals: 0, suffix: "", label: "Days a week" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">The corner</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              A quiet table in Nehru Nagar.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 text-lg text-ink">
              Cafe Snapchat is a small, cozy room just off Santoshi Mata Chowk — the kind of place friends,
              couples, and families settle into when they want food that tastes cared for.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-muted">
              The owner is humble and easy to talk to. Nothing here is loud or rushed. Coffee comes out hot or
              properly cold, pizzas and pastas leave the kitchen fresh, and the room stays peaceful enough for a
              real conversation.
            </p>
          </Reveal>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div>
                  <dt className="font-display text-3xl tracking-tight md:text-4xl">
                    <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </dt>
                  <dd className="mt-1 text-sm text-muted">{stat.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
        <Reveal className="lg:col-span-6" delay={100}>
          <div className="grid grid-cols-5 gap-3">
            <img
              src={photos.corner}
              alt="A calm coffee counter with warm light"
              className="col-span-3 shot-tall w-full rounded-card object-cover shadow-soft"
              width={800}
              height={1060}
              loading="lazy"
            />
            <div className="col-span-2 flex flex-col gap-3 pt-8">
              <img
                src={photos.table}
                alt="Coffee and a notebook on a cafe table"
                className="aspect-square w-full rounded-card object-cover shadow-soft"
                width={500}
                height={500}
                loading="lazy"
              />
              <img
                src={photos.friends}
                alt="People sharing a table at a neighborhood cafe"
                className="shot-portrait w-full rounded-card object-cover shadow-soft"
                width={500}
                height={640}
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
