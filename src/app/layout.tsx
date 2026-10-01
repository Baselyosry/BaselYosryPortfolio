import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteUrl, basePath } from "@/lib/site";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Basel Yosry, backend engineer",
  description:
    "Backend and full-stack engineer in Cairo. I co-founded Tristack, where I build and deploy web platforms for clients in Egypt and Saudi Arabia.",
  alternates: { canonical: basePath ? `${basePath}/` : "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Basel Yosry",
    title: "Basel Yosry, backend engineer",
    description:
      "Backend and full-stack engineer in Cairo. I co-founded Tristack, where I build and deploy web platforms for clients in Egypt and Saudi Arabia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basel Yosry, backend engineer",
    description:
      "Backend and full-stack engineer in Cairo. I co-founded Tristack, where I build and deploy web platforms for clients in Egypt and Saudi Arabia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-small focus:text-text"
        >
          Skip to content
        </a>
        <Navbar />
        <main
          id="main"
          tabIndex={-1}
          className="flex flex-1 flex-col focus:outline-none"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
