import { cafe } from "@/content/cafe";

export function WhatsAppButton() {
  return (
    <a
      href={cafe.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Cafe Snapchat on WhatsApp"
      className="wa-fab fixed right-4 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-accent text-bg shadow-lift"
    >
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true" fill="currentColor">
        <path d="M12.04 3C7.31 3 3.46 6.82 3.46 11.52c0 1.5.4 2.96 1.15 4.24L3 21l5.4-1.55a8.6 8.6 0 0 0 3.64.8h.01c4.73 0 8.58-3.82 8.58-8.52C20.63 6.82 16.77 3 12.04 3Zm4.86 12.05c-.2.57-1.17 1.09-1.63 1.16-.42.06-.95.09-1.53-.1-.35-.11-.8-.26-1.38-.51-2.43-1.05-4.01-3.5-4.13-3.66-.12-.17-.98-1.3-.98-2.48 0-1.18.62-1.76.84-2 .22-.24.48-.3.64-.3h.46c.15 0 .35-.06.54.41.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.17-.12.27-.24.41-.12.15-.25.32-.36.43-.12.12-.24.24-.1.47.14.23.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.17.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.15Z" />
      </svg>
    </a>
  );
}
