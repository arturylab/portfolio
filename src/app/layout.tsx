import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const title = "Portfolio | Arturo Rentería"
const description = "This is my personal portfolio website built with Next.js + TypeScript + Chakra UI."
const url = "https://arturylab.dev/"
const site = "@arturylab"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ["portfolio", "arturylab", "Arturo Rentería", "Python Full-Stack"],
  authors: [{ name: "arturylab", url: url }],
  icons: {
    icon: "icon.png"
  },
  openGraph: {
    title: title,
    description: description,
    url: url,
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: site,
    title: title,
    description: description,
    images: [`${url}og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
