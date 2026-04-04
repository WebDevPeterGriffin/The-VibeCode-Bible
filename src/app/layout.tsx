import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Search from "@/components/Search";
import AnnouncementBar from "@/components/AnnouncementBar";
import CursorGlow from "@/components/CursorGlow";

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
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[var(--color-background)] text-[var(--color-foreground)] h-screen overflow-hidden flex selection:bg-[var(--color-primary)]/30 selection:text-white flex-col relative`}
      >
        {/* Noise texture overlay */}
        <div className="pointer-events-none fixed inset-0 z-[2] noise-overlay opacity-[0.03]" aria-hidden="true" />

        {/* Single subtle ambient glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[80vw] h-[50vh] bg-violet-500/[0.04] rounded-full blur-[150px]" />
        </div>

        {/* Cursor glow */}
        <CursorGlow />

        <AnnouncementBar />
        <div className="flex-1 flex flex-col md:flex-row min-h-0 relative z-0">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0 overflow-y-auto custom-scrollbar relative">
            <header className="sticky top-0 z-10 p-4 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl flex justify-end md:hidden">
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
