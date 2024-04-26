import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [backgroundTheme, setBackgroundTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ $backgroundTheme: backgroundTheme, setBackgroundTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
