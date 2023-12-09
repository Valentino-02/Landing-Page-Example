import { Alegreya, Roboto_Flex } from "next/font/google";

import Layout from "@/components/Layout";
import "./globals.css";

export const metadata = {
  title: "Deryaba",
  description: "Violinist, Composer, and your Solution for all Things Music",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

const alegreya = Alegreya({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alegreya",
});
const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`!scroll-smooth ${alegreya.variable} ${roboto.className}`}
      lang="en"
    >
      <body className=" bg-deep-blue">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
