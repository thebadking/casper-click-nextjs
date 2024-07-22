'use client';
import React, { ReactNode, useState } from 'react';

export interface AppState {
  csprTheme: any;
  setCsprTheme: (csprTheme: any) => void;
}

const DARK_MODE = 'dark';

const defaultState: AppState = {
  csprTheme: DARK_MODE,
  setCsprTheme: () => {
  }
};

const AppContext = React.createContext<AppState>(defaultState);

const ContextComp = ({ children }: { children: ReactNode }) => {
  const [csprTheme, setCsprTheme] = useState(DARK_MODE);

  return (
    <AppContext.Provider
      value={{
        csprTheme,
        setCsprTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextComp;
