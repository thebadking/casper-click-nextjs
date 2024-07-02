"use client";
import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import AppContext, { AppState } from "@/context/AppContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider } from "@apollo/client";
import client from "@/utils/apolloClient";
import { ThemeProvider, useTheme } from "next-themes";

const ContextComp = ({ children }: { children: ReactNode }) => {
  const [theme, setBarTheme] = useState<AppState["theme"]>("dark");
  const [csprTheme, setCsprTheme] = useState<AppState["csprTheme"]>(null);

  const { setTheme } = useTheme();

  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

  useEffect(() => {
    import("@make-software/csprclick-ui").then((mod) => {
      const themeC =
        theme === "light"
          ? mod.CsprClickThemes.light
          : mod.CsprClickThemes.dark;
      setCsprTheme({
        ...themeC,
        typography: {
          ...mod.CsprClickThemes.typography,
          fontWeight: {
            bold: 700,
            extraBold: 800,
            light: 300,
            medium: 500,
            regular: 400,
            semiBold: 600,
          },
          fontFamily: {
            primary:
              'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important',
            mono: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important',
          },
        },
        styleguideColors: {
          ...themeC.styleguideColors,
          backgroundTertiary: theme === "light" ? "white" : "#1f2937",
          contentTertiary: theme === "light" ? "gray" : "gray",
          contentOnFill: theme === "light" ? "gray" : "gray",
        },
      });
    });
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeProvider attribute="class">
      <ApolloProvider client={client}>
        <QueryClientProvider client={queryClient}>
          <AppContext.Provider
            value={{ theme, csprTheme, setBarTheme, setCsprTheme }}
          >
            {children}
          </AppContext.Provider>
        </QueryClientProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default ContextComp;
