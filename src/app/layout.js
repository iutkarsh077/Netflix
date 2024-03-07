import GlobalState from "@/context";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webflix",
  description: "Webflix clone with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState>{children}</GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  );
}
