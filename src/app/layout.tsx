import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfair = localFont({
  src: [
    {
      path: "../../public/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const instrumentSans = localFont({
  src: [
    {
      path: "../../public/fonts/Instrument_Sans/InstrumentSans-VariableFont_wdth,wght.ttf",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Instrument_Sans/InstrumentSans-Italic-VariableFont_wdth,wght.ttf",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebSurfer | Premium Optical Fiber Broadband & Sky TV Nepal",
  description:
    "Nepal's pioneer high-speed internet service provider since 1999. Symmetric 100% pure optical fiber up to 1 Gbps with integrated Sky TV HD, Wi-Fi 6, and 99.98% uptime.",
  icons: {
    icon: "/assets/websurfer-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${instrumentSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased font-sans selection:bg-[#E5440C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
