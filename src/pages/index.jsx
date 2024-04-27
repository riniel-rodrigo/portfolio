import Head from "next/head";
import HomePage from "@/components/Home/index.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mim | Riniel</title>
        <meta
          name="description"
          content="Sou um desenvolvedor apaixonado por criar e explorar o vasto mundo da tecnologia!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <HomePage />
    </>
  );
}
