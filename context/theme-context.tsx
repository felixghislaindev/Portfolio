"use client";
import { Theme } from "@/lib/types";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemContextProviderProps = {
  children: React.ReactNode;
};
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemContextProvider({
  children,
}: ThemContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      return;
    }
    setTheme("light");
    window.localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be within the theme context provider");
  }
  return context;
};
