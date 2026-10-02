import { cafe } from "@/content/cafe";
import { Logo } from "./logo";
import { ScrollLink } from "./scroll-link";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted">
            Good food, good vibes, and a quiet corner in Pimpri Colony.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">Quick links</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <ScrollLink id={link.href.slice(1)} className="text-sm text-ink hover:text-accent">
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">Find us</p>
          <p className="mt-4 text-sm text-muted">{cafe.addressOneLine}</p>
          <a
            href={`tel:${cafe.phoneTel}`}
            className="mt-3 inline-block text-sm font-semibold text-ink hover:text-accent"
          >
            {cafe.phoneDisplay}
          </a>
          <a
            href={cafe.instagram}
            className="mt-3 block text-sm font-semibold text-ink hover:text-accent"
            target="_blank"
            rel="noreferrer"
          >
            Instagram {cafe.instagramHandle}
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-sm text-muted md:px-8">© Cafe Snapchat</p>
      </div>
    </footer>
  );
}
