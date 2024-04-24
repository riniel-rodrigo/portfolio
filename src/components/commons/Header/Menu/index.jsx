import Link from "next/link"
import Image from "next/image"

import Icon from "../../icons/index.jsx"
import { ActiveLink } from "../ActiveLink/index.jsx"
import { useTheme } from "../../Context/ThemeContext.jsx"

import * as S from "./style.js"

export const Menu = ({ onClose, isVisible }) => {
    const { BackgroundTheme } = useTheme();

    return (
        <S.ContainerMenu style={{ display: isVisible ? "inherit" : "none" }} onClick={onClose}>
            <S.MenuH BackgroundTheme={BackgroundTheme} onClick={(e) => e.stopPropagation()}>
                <S.Icons>
                    <Link href="/">
                        <Image src="/icon.svg" width={43.19} height={45} alt="Logo Riniel, ícone" />
                    </Link>
                    <span onClick={onClose}>
                        <Icon icon="menuClose" color="#fff" size={35} />
                    </span>
                </S.Icons>
                <S.Nav>
                    <ActiveLink onClick={onClose} href="/" children="Sobre mim" />
                    {/* <ActiveLink onClick={onClose} href="/Projects" children="Projetos" /> */}
                    <ActiveLink onClick={onClose} href="/contacts" children="Fale comigo" />
                </S.Nav>
            </S.MenuH>
        </S.ContainerMenu>
    );
};
