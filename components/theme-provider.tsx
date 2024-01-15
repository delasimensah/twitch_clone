"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, ...restOfProps } = props;

  return <NextThemesProvider {...restOfProps}>{children}</NextThemesProvider>;
};
