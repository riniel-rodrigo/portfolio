import Head from "next/head";
import AboutMe from "@/components/Home/AboutMe/index.jsx";
import {favicon} from "../../public/icon.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre mim | Riniel</title>
        <meta name="description" content="Sou um desenvolvedor apaixonado por criar e explorar o vasto mundo da tecnologia!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <AboutMe />
    </>
  );
}
