import Link from "next/link"
import Image from "next/image"

import Icon from "../../../icons/index.jsx"
import { ActiveLink } from "../ActiveLink/index.jsx"
import { useTheme } from "../../../Context/ThemeContext.jsx"
import { ThemeButton } from "../ThemeButton/index.jsx"

import * as S from "./style.js"

export const Menu = ({ onClose, isVisible }) => {
    const { $backgroundTheme } = useTheme();

    return (
        <S.ContainerMenu style={{ display: isVisible ? "inherit" : "none" }} onClick={onClose}>
            <S.MenuH $backgroundTheme={$backgroundTheme} onClick={(e) => e.stopPropagation()}>
                <S.Icons>
                    <Link href="/">
                        <Image src="/icon.svg" width={43.19} height={45} alt="Logo Riniel, ícone" />
                    </Link>
                    <S.divRight>
                        <ThemeButton />
                        <span onClick={onClose}>
                            <Icon icon="menuClose" size={35} />
                        </span>
                    </S.divRight>
                </S.Icons>
                <S.Nav>
                    <ActiveLink onClick={onClose} href="/" children="Sobre mim" />
                    <ActiveLink onClick={onClose} href="/contacts" children="Fale comigo" />
                </S.Nav>
            </S.MenuH>
        </S.ContainerMenu>
    );
};
