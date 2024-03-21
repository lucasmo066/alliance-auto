import "~/styles/globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"


const mulish = Mulish({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alliance Group Autobrokers",
  description:
    "Marietta, Georgia's premier destination for exceptional used cars.",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        {children}
       <Analytics />
        <SpeedInsights />
      </body>
 
    </html>
  );
}
