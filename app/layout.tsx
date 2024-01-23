import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Twitch Clone App",
  description: "",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="twich-clone-theme"
          >
            <Toaster theme="light" position="bottom-center" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
