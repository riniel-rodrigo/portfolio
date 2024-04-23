import Link from "next/link"
import Image from "next/image"

import Icon from "../../icons/index.jsx"
import { ActiveLink } from "../ActiveLink/index.jsx"

import * as S from "./style.js"

export const Menu = ({ onClose, isVisible }) => {

    return (
        <S.ContainerMenu style={{ display: isVisible ? "inherit" : "none" }} onClick={onClose}>
            <S.MenuH onClick={(e) => e.stopPropagation()}>
                <S.Icons>
                    <Link href="/">
                        <Image src="/icon.svg" width={43.2} height={55} alt="Logo Riniel, ícone" />
                    </Link>
                    <span onClick={onClose}>
                        <Icon icon="menuClose" color="#fff" size={35} />
                    </span>
                </S.Icons>
                <S.Nav>
                    <ActiveLink onClick={onClose} href="/" children="Sobre mim" />
                    <ActiveLink onClick={onClose} href="/Projects" children="Projetos" />
                    <ActiveLink onClick={onClose} href="/contacts" children="Fale comigo" />
                </S.Nav>
            </S.MenuH>
        </S.ContainerMenu>
    );
};
