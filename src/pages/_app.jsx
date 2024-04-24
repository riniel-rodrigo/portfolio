import Layout from "@/layout/layout";

import { ThemeProvider } from "@/components/commons/Context/ThemeContext";

import { GlobalStyles } from "../styles/globalStyle.js";


export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
