"use client";

import { useState, useEffect } from "react";

export const useCsprTheme = (theme: "light" | "dark" = "light") => {
  const [cpsrTheme, setCsprTheme] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import("@make-software/csprclick-ui")
      .then((mod) => {
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
            backgroundTertiary: theme === "light" ? "transparent" : "#1f2937",
            contentTertiary: theme === "light" ? "gray" : "gray",
            contentOnFill: theme === "light" ? "gray" : "gray",
          },
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [theme]);

  return { cpsrTheme, isLoading };
};
