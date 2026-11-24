import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";

export const instant = false;

export const metadata: Metadata = {
  title: "BeautyMe | Discover Independent Creatives",
  description: "Showcasing the best independent hairdressers, massage therapists, nail technicians, and even crafters.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <Suspense fallback={<div className="h-16 border-b border-gray-200 bg-white w-full" />}>
          <Navbar />
        </Suspense>

        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        
      <Suspense fallback={<div className="h-64 bg-white border-t border-gray-100 w-full" />}>
        <Footer />
      </Suspense>
      </body>
    </html>
  );
}