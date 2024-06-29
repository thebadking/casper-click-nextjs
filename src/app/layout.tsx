"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import dynamic from "next/dynamic";
import { useCsprTheme } from "@/hooks/useCsprTheme";

const ClickProvider = dynamic(
  () => import("@make-software/csprclick-ui").then((mod) => mod.ClickProvider),
  {
    ssr: false,
  }
);

const inter = Inter({ subsets: ["latin"] });

const clickOptions = {
  appName: "Scansper",
  contentMode: "iframe",
  providers: [
    "casper-wallet",
    "ledger",
    "casperdash",
    "metamask-snap",
    "torus-wallet",
    "casper-signer",
  ],
  appId: "scansper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { cpsrTheme, isLoading } = useCsprTheme("light");

  if (isLoading || !cpsrTheme) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <div className="flex w-full items-center justify-center mt-44">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          <ClickProvider options={clickOptions}>
            <ThemeProviderStyled theme={cpsrTheme}>
              {children}
            </ThemeProviderStyled>
          </ClickProvider>
        </div>
      </body>
    </html>
  );
}
