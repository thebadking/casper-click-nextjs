"use client";
import { useAppContext } from "./ContextComp";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { getCsprTheme } from "@/components/getCsprTheme";
import { Lang, ThemeModeType } from "@make-software/csprclick-ui";
import {
  accountMenuItems,
  CURRENCIES,
  currencySettings,
  languageSettings,
  NETWORKS,
  networkSettings,
} from "@/components/settings";
import { useState } from "react";
import { useTheme } from "next-themes";

const ClickProvider = dynamic(
  () => import("@make-software/csprclick-ui").then((mod) => mod.ClickProvider),
  {
    ssr: false,
  }
);

const ClickTopBar = dynamic(
  () => import("@make-software/csprclick-ui").then((mod) => mod.ClickUI),
  {
    ssr: false,
  }
);

const BuyCSPRMenuItem = dynamic(
  () =>
    import("@make-software/csprclick-ui").then((mod) => mod.BuyCSPRMenuItem),
  {
    ssr: false,
  }
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

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

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const accountMenuItems = [<BuyCSPRMenuItem key={"buy-cspr"} />];
  const topBarSettings = { accountMenuItems };
  const [lang, setLang] = useState<Lang>(Lang.EN);
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [network, setNetwork] = useState<string>(NETWORKS[1]);

  const { csprTheme, setCsprTheme } = useAppContext();
  const { setTheme } = useTheme();

  const handleThemeSwitch = () => {
    const newTheme = csprTheme === "dark" ? "light" : "dark";
    setCsprTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <ClickProvider options={clickOptions}>
      <ThemeProviderStyled theme={getCsprTheme(csprTheme)}>
        <ClickTopBar
          topBarSettings={{
            onThemeSwitch: handleThemeSwitch,
            accountMenuItems: accountMenuItems,
            languageSettings: languageSettings(lang, setLang),
            currencySettings: currencySettings(currency, setCurrency),
            networkSettings: networkSettings(network, setNetwork),
          }}
          themeMode={
            csprTheme === "dark" ? ThemeModeType.dark : ThemeModeType.light
          }
        />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProviderStyled>
    </ClickProvider>
  );
}
