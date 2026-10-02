import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/cafe/footer";
import { MenuSection } from "@/components/cafe/menu";
import { Navbar } from "@/components/cafe/navbar";
import { WhatsAppButton } from "@/components/cafe/whatsapp";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Cafe Snapchat" },
      {
        name: "description",
        content:
          "Cafe Snapchat menu in Pimpri Colony — cold coffee, pizza, pasta, burgers, momos, maggi and more. Open daily 9:30 AM to 10 PM.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <MenuSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
