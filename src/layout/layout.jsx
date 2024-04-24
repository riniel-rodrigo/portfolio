import { Montserrat } from "next/font/google";
import { ThemeProvider } from "styled-components";

import Header from "../components/commons/Header/index.jsx";
import { lighTheme, darkTheme } from "@/styles/theme.js";
import { useTheme } from "../components/commons/Context/ThemeContext.jsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  family: "sans-serif",
});

export default function Layout({ children }) {
  const { BackgroundTheme, setBackgroundTheme } = useTheme();

  const toggleTheme = () => {
    BackgroundTheme === "light" ? setBackgroundTheme("dark") : setBackgroundTheme("light");
  }

  return (
    <ThemeProvider theme={BackgroundTheme === "light" ? lighTheme : darkTheme}>
      <div className={montserrat.className}>
        <Header onClick={() => toggleTheme()}/>
        {children}
      </div>
    </ThemeProvider>
  );
}
