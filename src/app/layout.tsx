import { Inter } from "next/font/google";
import "./globals.css";
import ContextComp from "@/context/ContextComp";
import CasperProvider from "@/context/CasperProvider";
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
        <ContextComp>
          <ThemeProvider>
            <CasperProvider>{children}</CasperProvider>
          </ThemeProvider>
        </ContextComp>
      </body>
    </html>
  );
}
