"use client";

import React from "react";

export interface AppState {
  theme: string;
  csprTheme: any;
  setBarTheme: (theme: string) => void;
  setCsprTheme: (csprTheme: any) => void;
}

const defaultTheme = {
  typography: {
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
    backgroundTertiary: "#1f2937",
    contentTertiary: "gray",
    contentOnFill: "gray",
  },
};

const defaultState: AppState = {
  theme: "light",
  csprTheme: defaultTheme,
  setBarTheme: () => {},
  setCsprTheme: () => {},
};

export default React.createContext<AppState>(defaultState);
