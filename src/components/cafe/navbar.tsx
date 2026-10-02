import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cafe } from "@/content/cafe";
import { cn } from "@/lib/cn";
import { Logo } from "./logo";
import { ScrollLink } from "./scroll-link";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("nav-shell fixed inset-x-0 top-0 z-40", (stuck || open) && "is-stuck")}>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label={`${cafe.name} home`} onClick={(event) => {
          event.preventDefault();
          setOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <ScrollLink
              key={link.href}
              id={link.href.slice(1)}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
        <a href={cafe.whatsapp} className="btn btn-fill hidden md:inline-flex" target="_blank" rel="noreferrer">
          Order on WhatsApp
        </a>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-bg px-5 py-4 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {links.map((link) => (
            <ScrollLink
              key={link.href}
              id={link.href.slice(1)}
              className="border-b border-line py-3 text-lg font-medium"
              onNavigate={() => setOpen(false)}
            >
              {link.label}
            </ScrollLink>
          ))}
          <a
            href={cafe.whatsapp}
            className="btn btn-fill mt-4"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Order on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
