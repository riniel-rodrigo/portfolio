import Link from "next/link"
import Image from "next/image"

import Icon from "../../icons/index.jsx"

import * as S from "./Menu.js"

export const Menu = ({onClose, isVisible}) => {

    return (
        <S.ContainerMenu style={{display: isVisible ? "inherit" : "none"}} onClick={onClose}>
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
                    <Link onClick={onClose} href="/">Sobre mim</Link>
                    <Link onClick={onClose} href="/portfolio" >Portfolio</Link>
                    <Link onClick={onClose} href="/contacts">Fale comigo</Link>
                </S.Nav>
            </S.MenuH>
        </S.ContainerMenu>
    )
}
