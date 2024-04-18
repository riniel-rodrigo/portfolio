
import { Roboto } from "next/font/google";
import { Rubik_Doodle_Shadow } from "next/font/google";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import * as S from "./style";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

const rubik = Rubik_Doodle_Shadow({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.ContainerHeader>
      <S.Header className={roboto.className}>
        <Link href="/">
          <S.LogoDiv onMouseEnter={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <Image src="/icon.svg" width={55} height={55} alt="Logo Riniel, ícone" />
            <span className={rubik.className} style={{ opacity: isHovered ? 1 : 0 }}>iniel</span>
          </S.LogoDiv>
        </Link>

        <S.Nav>
          <Link href="/">Sobre mim</Link>
          {/* <Link href="/Contacts">Portfolio</Link> */}
          <Link href="/contacts">Fale comigo</Link>
        </S.Nav>
      </S.Header>
    </S.ContainerHeader>
  );
}
