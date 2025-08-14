import type { ThemeContextProps } from "@/interfaces";
import type { Theme } from "@/types";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider =({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    document.documentElement.classList.toggle('dark')
  }

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}