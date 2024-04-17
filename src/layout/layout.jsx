import { Montserrat } from "next/font/google";

import Header from "../components/commons/Header/index.jsx";

const montserrat = Montserrat({
  subsets: ["latin"],
  family: "sans-serif",
});

export default function Layout({ children }) {
  return (
    <div className={montserrat.className}>
      <Header />
      {children}
    </div>
  );
}
