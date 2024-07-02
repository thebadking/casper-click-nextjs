"use client";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import AppContext from "@/context/AppContext";
import { Lang, ThemeModeType } from "@make-software/csprclick-ui";
import {
  accountMenuItems,
  CURRENCIES,
  currencySettings,
  languageSettings,
  NETWORKS,
  networkSettings,
} from "@/components/settings";

const ClickProvider = dynamic(
  () => import("@make-software/csprclick-ui").then((mod) => mod.ClickProvider),
  {
    ssr: false,
  }
);

const ClickTopBar = dynamic(
  () =>
    import("@make-software/csprclick-ui").then((mod) => {
      return mod.ClickUI;
    }),
  {
    ssr: false,
  }
);

const BuyCSPRMenuItem = dynamic(
  () =>
    import("@make-software/csprclick-ui").then((mod) => {
      return mod.BuyCSPRMenuItem;
    }),
  {
    ssr: false,
  }
);

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
  const { theme, csprTheme, setBarTheme } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const accountMenuItems = [<BuyCSPRMenuItem key={"buy-cspr"} />];
  const topBarSettings = { accountMenuItems };

  const [lang, setLang] = useState<Lang>(Lang.EN);
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [network, setNetwork] = useState<string>(NETWORKS[1]);

  useEffect(() => {
    if (csprTheme) {
      setIsLoading(false);
    }
  }, [csprTheme, setBarTheme]);

  return (
    <ClickProvider options={clickOptions}>
      {!isLoading && (
        <ThemeProviderStyled theme={csprTheme}>
          <ClickTopBar
            topBarSettings={{
              onThemeSwitch: () =>
                setBarTheme(
                  theme === ThemeModeType.light
                    ? ThemeModeType.dark
                    : ThemeModeType.light
                ),
              accountMenuItems: accountMenuItems,
              languageSettings: languageSettings(lang, setLang),
              currencySettings: currencySettings(currency, setCurrency),
              networkSettings: networkSettings(network, setNetwork),
            }}
            themeMode={csprTheme}
          />
        </ThemeProviderStyled>
      )}
      {children}
    </ClickProvider>
  );
}
