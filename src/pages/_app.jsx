import Layout from "@/layout/layout";
import { GlobalStyles } from "../styles/globalStyle.js";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}
