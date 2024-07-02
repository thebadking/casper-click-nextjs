"use client";
import React, { ReactNode, useContext, useState } from "react";

export interface AppState {
  csprTheme: any;
  setCsprTheme: (csprTheme: any) => void;
}

const defaultState: AppState = {
  csprTheme: "dark",
  setCsprTheme: () => {},
};

const AppContext = React.createContext<AppState>(defaultState);

const ContextComp = ({ children }: { children: ReactNode }) => {
  const [csprTheme, setCsprTheme] = useState("dark");

  return (
    <AppContext.Provider
      value={{
        csprTheme,
        setCsprTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default ContextComp;
