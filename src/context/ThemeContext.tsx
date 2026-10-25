import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorTheme = 'navy' | 'teal' | 'cobalt' | 'forest';

interface ThemeConfig {
  id: ColorTheme;
  name: string;
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryBorder: string;
  accent: string;
  accentBg: string;
  headerBg: string;
  navActive: string;
}

export const THEMES: Record<ColorTheme, ThemeConfig> = {
  navy: {
    id: 'navy',
    name: 'Apex Classic Navy',
    primary: 'bg-blue-900',
    primaryHover: 'hover:bg-blue-800',
    primaryLight: 'bg-blue-50',
    primaryBorder: 'border-blue-900',
    accent: 'text-amber-500',
    accentBg: 'bg-amber-500',
    headerBg: 'bg-slate-900',
    navActive: 'text-blue-900 border-blue-900'
  },
  teal: {
    id: 'teal',
    name: 'Pharma Medical Teal',
    primary: 'bg-teal-700',
    primaryHover: 'hover:bg-teal-800',
    primaryLight: 'bg-teal-50',
    primaryBorder: 'border-teal-700',
    accent: 'text-amber-600',
    accentBg: 'bg-[#f08b23]',
    headerBg: 'bg-[#0f464d]',
    navActive: 'text-teal-700 border-teal-700'
  },
  cobalt: {
    id: 'cobalt',
    name: 'Royal Cobalt Blue',
    primary: 'bg-indigo-900',
    primaryHover: 'hover:bg-indigo-800',
    primaryLight: 'bg-indigo-50',
    primaryBorder: 'border-indigo-900',
    accent: 'text-cyan-500',
    accentBg: 'bg-cyan-500',
    headerBg: 'bg-slate-950',
    navActive: 'text-indigo-900 border-indigo-900'
  },
  forest: {
    id: 'forest',
    name: 'Deep Healthcare Emerald',
    primary: 'bg-emerald-800',
    primaryHover: 'hover:bg-emerald-900',
    primaryLight: 'bg-emerald-50',
    primaryBorder: 'border-emerald-800',
    accent: 'text-amber-500',
    accentBg: 'bg-amber-500',
    headerBg: 'bg-slate-900',
    navActive: 'text-emerald-800 border-emerald-800'
  }
};

interface ThemeContextType {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
  config: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'navy',
  setTheme: () => {},
  config: THEMES.navy
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ColorTheme>('navy');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, config: THEMES[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
