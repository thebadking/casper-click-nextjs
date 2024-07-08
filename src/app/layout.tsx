import { Inter } from "next/font/google";
import "./globals.css";
import ContextComp from "@/context/ContextComp";
import ClientProvider from "@/context/ClientProvider";
import { ThemeToggle } from "@/context/theme-toggle";
import { ThemeProvider } from "@/context/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id={"root"} />
        <ThemeProvider>
          <ContextComp>
            <ClientProvider>{children}</ClientProvider>
          </ContextComp>
        </ThemeProvider>
      </body>
    </html>
  );
}
