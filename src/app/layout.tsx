import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Search from "@/components/Search";
import AnnouncementBar from "@/components/AnnouncementBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Everything I Know About Vibe Coding",
  description: "A personal knowledge base about building with AI agents. Like a senior dev friend's private notes made public.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen flex selection:bg-[var(--color-primary)] selection:text-white flex-col`}
      >
        <AnnouncementBar />
        <div className="flex-1 flex flex-col md:flex-row min-h-0">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0">
            <header className="sticky top-0 z-10 p-4 border-b border-border/50 bg-background/80 backdrop-blur-sm flex justify-end md:hidden">
              <Search />
            </header>
            <div className="hidden md:flex justify-end p-6 max-w-4xl w-full mx-auto pb-0">
              <Search />
            </div>
            <div className="p-6 md:p-10 max-w-4xl mx-auto w-full flex-1">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
