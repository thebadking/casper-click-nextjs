"use client";

import React from "react";

export interface AppState {
  validators: {
    publicKey?: string;
    name?: string;
    img?: string;
    fee?: number;
  }[];
}

export default React.createContext<AppState>({
  validators: [],
});
