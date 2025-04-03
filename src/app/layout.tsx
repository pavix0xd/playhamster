import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | PlaYHamsteR",
    default: "PlaYHamsteR",
  },
  description: "The best place to find mods for your favorite games.",
  applicationName : "PlaYHamsteR",
  keywords: [
    "PlaYHamsteR",
    "mods",
    "gaming",
    "games",
    "modding",
    "community",
    "downloads",
    "resources",
    "tools",
    "support",
    "updates",
    "news",
    "tutorials",
    "guides",
    "cheats",
    "hacks",
    "skins",
    "maps",
    "characters",
    "weapons",
    "vehicles",
    "mods for games",
    "game mods",
    "game modding",
    "game modding community",
    "game modding resources",
    "game modding tools",
    "game modding support",
    "game modding updates",
    "game modding news",
    "game modding tutorials",
    "game modding guides",
    "game modding cheats",
    "game modding hacks",
    "game modding skins",
    "game modding maps",
    "game modding characters",
    "game modding weapons",
    "game modding vehicles",
    "game modding mods",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
