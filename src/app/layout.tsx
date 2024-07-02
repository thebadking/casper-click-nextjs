import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "./ClientProvider";
import ContextComp from "@/context/ContextComp";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id={"root"}>
          <ContextComp>
            <div className="p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
              <ClientProvider>{children}</ClientProvider>
            </div>
          </ContextComp>
        </div>
      </body>
    </html>
  );
}
