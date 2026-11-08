import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nocturne",
  description:
    "An imagined archive of cities after dark, shaped by passing lights and long exposures.",
};

const googleSansFlex = Google_Sans_Flex({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.className} h-full antialiased`}
    >
      <body className="h-min-full">{children}</body>
    </html>
  );
}
