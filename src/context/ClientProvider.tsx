'use client';
import { useAppContext } from './ContextComp';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled, { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { AppTheme } from '@/components/getCsprTheme';
import { Lang, ThemeModeType } from '@make-software/csprclick-ui';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-typescript';
import {
  accountMenuItems,
  CURRENCIES,
  currencySettings,
  languageSettings,
  NETWORKS,
  networkSettings
} from '@/components/settings';
import { useState } from 'react';
import { useTheme } from 'next-themes';

const ClickProvider = dynamic(
  () => import('@make-software/csprclick-ui').then((mod) => mod.ClickProvider),
  {
    ssr: false
  }
);

const ClickTopBar = dynamic(
  () => import('@make-software/csprclick-ui').then((mod) => mod.ClickUI),
  {
    ssr: false
  }
);

const BuyCSPRMenuItem = dynamic(
  () => import('@make-software/csprclick-ui').then((mod) => mod.BuyCSPRMenuItem),
  {
    ssr: false
  }
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
});

const clickOptions = {
  appName: 'Scansper',
  contentMode: 'iframe',
  providers: [
    'casper-wallet',
    'ledger',
    'casperdash',
    'metamask-snap',
    'torus-wallet',
    'casper-signer'
  ],
  appId: 'scansper'
};

const TopBarSection = styled.section(({ theme }) => ({
  backgroundColor: theme.topBarBackground,
  position: 'fixed',
  zIndex: 1,
  width: '100%'
}));

const TopBarContainer = styled.div(({ theme }) =>
  theme.withMedia({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    maxWidth: ['540px', '720px', '960px'],
    margin: '0 auto',
    padding: '0 12px'
  })
);

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const accountMenuItems = [<BuyCSPRMenuItem key={'buy-cspr'} />];
  const topBarSettings = { accountMenuItems };
  const [lang, setLang] = useState<Lang>(Lang.EN);
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [network, setNetwork] = useState<string>(NETWORKS[1]);

  const { csprTheme, setCsprTheme } = useAppContext();
  const { setTheme } = useTheme();

  const [themeMode, setThemeMode] = useState<ThemeModeType>(ThemeModeType.light);

  const handleThemeSwitch = () => {
    setThemeMode(themeMode === ThemeModeType.light ? ThemeModeType.dark : ThemeModeType.light);
  };

  return (
    <ClickProvider options={clickOptions}>
      <ThemeProviderStyled theme={AppTheme[themeMode]}>
        <TopBarSection>
          <TopBarContainer>
            <ClickTopBar
              topBarSettings={{
                onThemeSwitch: handleThemeSwitch,
                accountMenuItems: accountMenuItems,
                languageSettings: languageSettings(lang, setLang),
                currencySettings: currencySettings(currency, setCurrency),
                networkSettings: networkSettings(network, setNetwork)
              }}
              themeMode={themeMode}
            />
          </TopBarContainer>
        </TopBarSection>

        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeProviderStyled>
    </ClickProvider>
  );
}
