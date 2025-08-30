import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Arturo Rentería",
  description: "This is my personal portfolio website built with Next.js + TypeScript + Chakra UI.",
  icons: {
    icon: "icon.png"
  }
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
