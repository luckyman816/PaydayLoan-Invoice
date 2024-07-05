"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
//wallet contexts
import XChainsProvider from "@/contexts/XChainsProvider";
import XDefiWalletProvider from '@/contexts/XDefiProvider';
//notification
import NotificationProvider from "@/contexts/NotificationContext";

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <ThemeProvider attribute="class" enableSystem={true}>
    <NotificationProvider>
      <XChainsProvider>
        <XDefiWalletProvider>
          {children}
        </XDefiWalletProvider>
      </XChainsProvider>
    </NotificationProvider>
  </ThemeProvider>
);

export default ThemeClient;
