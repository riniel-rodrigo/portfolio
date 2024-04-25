
import { Roboto } from "next/font/google";
import { Rubik_Doodle_Shadow } from "next/font/google";
import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "./Menu/index.jsx";
import Icon from "../icons/index.jsx";
import { ActiveLink } from "./ActiveLink/index.jsx";
import { useTheme } from "../Context/ThemeContext.jsx"

import * as S from "./style.js";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

const rubik = Rubik_Doodle_Shadow({
  subsets: ["latin"],
  weight: "400",
});

export default function Header({ onClick }) {

  const { BackgroundTheme } = useTheme();

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

  const [iconLight, setIconLight] = useState(true);

  const toggleIconTheme = () => {
    setIconLight(!iconLight);
  }

  return (
    <S.ContainerHeader BackgroundTheme={BackgroundTheme} >
      <S.Header className={roboto.className}>

        <Link href="/">
          <S.LogoDiv onMouseEnter={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <Image src="/icon.svg" width={45} height={45} alt="Logo Riniel, ícone" />
            <span className={rubik.className} style={{ opacity: isHovered ? 1 : 0 }}>iniel</span>
          </S.LogoDiv>
        </Link>


        <S.Nav>
          <S.NavLink>
            <ActiveLink href="/" children="Sobre mim" />
            {/* <ActiveLink href="/Projects" children="Projetos" /> */}
            <ActiveLink href="/contacts" children="Fale comigo" />
          </S.NavLink>

          <S.divThemeIcon onClick={() => { toggleIconTheme(); onClick(); }}>
            {iconLight ? (
              <Icon icon="sun" />
            ) : (
              <Icon icon="moon" />
            )}
          </S.divThemeIcon>

          <S.MenuH onClick={openMenu}>
            <S.DivMenuH BackgroundTheme={BackgroundTheme}>
              <Icon icon="menu" size={35} />
            </S.DivMenuH>
          </S.MenuH>
        </S.Nav>

        {menuOpen ? <Menu onClose={closeMenu} isVisible={openMenu} /> : ""}

      </S.Header>
    </S.ContainerHeader>
  );
}
