import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const title = "Emanuel Arturo Rentería del Real | Portafolio";
const description = "Portafolio académico y profesional de Emanuel Arturo Rentería del Real, profesor universitario, investigador en nanotecnología y desarrollador web.";
const url = "https://arturylab.dev/";
const site = "@arturylab";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Emanuel Arturo Rentería",
    "portafolio",
    "nanotecnología",
    "docencia",
    "investigación",
    "Python",
    "educación superior",
  ],
  authors: [{ name: "Emanuel Arturo Rentería del Real", url }],
  icons: {
    icon: "icon.png",
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: `${url}og-image.png`,
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site,
    title,
    description,
    images: [`${url}og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
