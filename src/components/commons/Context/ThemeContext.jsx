import { createContext, useContext, useState } from 'react';

// Crie o contexto
const ThemeContext = createContext();

// Crie um hook personalizado para usar o contexto
export function useTheme() {
  return useContext(ThemeContext);
}

// Crie o componente provedor
export function ThemeProvider({ children }) {
  const [BackgroundTheme, setBackgroundTheme] = useState("dark");

  // Passe o tema e a função toggleTheme para o valor do contexto
  return (
    <ThemeContext.Provider value={{ BackgroundTheme, setBackgroundTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
