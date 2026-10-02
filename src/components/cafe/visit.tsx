import { useEffect, useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import { cafe } from "@/content/cafe";
import { Reveal } from "./reveal";

function readOpen(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
  const mins = hour * 60 + minute;
  return mins >= 9 * 60 + 30 && mins < 22 * 60;
}

export function Visit() {
  const [open, setOpen] = useState<boolean | null>(null);
  const [mapLive, setMapLive] = useState(false);

  useEffect(() => {
    setOpen(readOpen());
    const timer = window.setInterval(() => setOpen(readOpen()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="visit" className="scroll-mt-20 mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">Visit us</p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Come hungry. Stay a while.
            </h2>
            <p className="mt-4 text-muted">
              Shop no. 6, Shankeshwar Darshan — a short walk from Santoshi Mata Chowk in Pimpri Colony.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted">
                    {cafe.address.line1}
                    <br />
                    {cafe.address.line2}
                    <br />
                    {cafe.address.line3}
                    <br />
                    {cafe.address.line4}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-muted">{cafe.hoursLabel}</p>
                  {open === null ? null : (
                    <p className="mt-1 text-sm font-semibold text-accent">
                      {open ? "Open right now" : "Closed right now — back at 9:30 AM"}
                    </p>
                  )}
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Phone & WhatsApp</p>
                  <a href={`tel:${cafe.phoneTel}`} className="text-muted underline-offset-4 hover:text-accent hover:underline">
                    {cafe.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={cafe.maps} className="btn btn-fill" target="_blank" rel="noreferrer">
                Get Directions
              </a>
              <a href={`tel:${cafe.phoneTel}`} className="btn btn-ghost">
                Call Now
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" delay={80}>
          <div className="map-frame relative overflow-hidden rounded-card border border-line shadow-soft">
            <iframe
              title="Map of Cafe Snapchat in Pimpri Colony"
              src={cafe.mapEmbed}
              className={mapLive ? "h-full w-full border-0" : "pointer-events-none h-full w-full border-0"}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <button
              type="button"
              className="absolute right-3 bottom-3 rounded-full bg-surface px-3 py-2 text-sm font-semibold text-ink shadow-soft"
              onClick={() => setMapLive((value) => !value)}
            >
              {mapLive ? "Done with map" : "Move the map"}
            </button>
          </div>
          <p className="mt-3 text-sm text-muted">Home delivery on Zomato and Swiggy.</p>
        </Reveal>
      </div>
    </section>
  );
}
