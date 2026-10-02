import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const title = "Cafe Snapchat | Cafe in Pimpri Chinchwad";
const description =
  "Cafe Snapchat is a cozy cafe in Nehru Nagar, Pimpri Colony — coffee, pizza, pasta, burgers and breakfast. Open daily 9:30 AM to 10 PM. Rated 4.8 on Google.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "cafe in Pimpri Chinchwad, Cafe Snapchat, coffee pizza pasta Pimpri, Nehru Nagar cafe, breakfast Pimpri Colony, burgers Pimpri",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#F7F1E8" },
      { name: "geo.region", content: "IN-MH" },
      { name: "geo.placename", content: "Pimpri Colony, Pimpri-Chinchwad" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
