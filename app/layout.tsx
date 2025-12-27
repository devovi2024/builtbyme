import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Built By Me",
  description: "A platform to showcase projects built by developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-gray-50 text-gray-900`}>
        <header className="w-full py-4 px-6 shadow-md bg-white sticky top-0 z-50">
          <h1 className="text-xl font-bold">Built By Me</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
