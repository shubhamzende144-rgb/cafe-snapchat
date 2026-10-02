import { createFileRoute } from "@tanstack/react-router";
import { schema } from "@/content/cafe";
import { About } from "@/components/cafe/about";
import { Footer } from "@/components/cafe/footer";
import { Gallery } from "@/components/cafe/gallery";
import { Hero } from "@/components/cafe/hero";
import { Marquee } from "@/components/cafe/marquee";
import { MenuSection } from "@/components/cafe/menu";
import { Navbar } from "@/components/cafe/navbar";
import { Reviews } from "@/components/cafe/reviews";
import { Visit } from "@/components/cafe/visit";
import { WhatsAppButton } from "@/components/cafe/whatsapp";
import { ScrollLink } from "@/components/cafe/scroll-link";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ScrollLink id="about" className="skip-link">
        Skip to content
      </ScrollLink>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <MenuSection />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
