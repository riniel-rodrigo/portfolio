
import { Roboto } from "next/font/google";
import { Rubik_Doodle_Shadow } from "next/font/google";
import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "./Menu/Menu.jsx";
import Icon from "../icons/index.jsx";

import * as S from "./style.js";

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

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

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

        <S.MenuH onClick={openMenu}>
          <S.DivMenuH>
            <Icon icon="menu" size={35}/>
          </S.DivMenuH>
        </S.MenuH>

        {menuOpen ? <Menu onClose={closeMenu} isVisible={openMenu}/> : ""}
     
      </S.Header>
    </S.ContainerHeader>
  );
}
