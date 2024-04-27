import Link from "next/link";
import Image from "next/image";

import avatar from "../../../../../public/avatar.png";
import Button from "../../../commons/Button/index.jsx";
import Icon from "../../../commons/icons/index.jsx";

import * as S from "./style.js";

export const Introduction = () => {
  return (
    <S.AboutmeDiv>
      <S.AboutmeDivLeft>
        <S.InfoDiv>
          <h1>
            Prazer, sou&nbsp;
            <span>Riniel Rodrigo</span>
          </h1>
          <p>Bem-vindo(a) ao meu portfólio! Neste espaço, você encontrará um pouquinho sobre mim, poderá explorar alguns projetos que desenvolvi e, caso surja alguma dúvida ou se desejar trocar ideias, sinta-se à vontade para entrar em contato!</p>
          <div>
            <Button href="/contacts" content="Converse comigo!" />
            <S.cvButton>
              <Button target="_blank" href="https://drive.google.com/file/d/1UB6pS4XTMb_tfFlAjYYqVFKtKazEXbZD/view?usp=sharing" dark content="Currículo" children={<Icon icon="pdf" size={19} />} />
            </S.cvButton>
          </div>

          <S.divIcons>
            <Link href="https://github.com/riniel-rodrigo" target="_blank">
              <Icon icon="github" />
            </Link>
            <Link href="https://www.linkedin.com/in/riniel-rodrigo/" target="_blank">
              <Icon icon="linkedin" />
            </Link>
          </S.divIcons>
        </S.InfoDiv>
      </S.AboutmeDivLeft>

      <S.AboutmeDivRight>
        <div>
          <Image src={avatar} alt="Avatar Riniel - Saudações" unoptimized width={450} height={300} />
        </div>
      </S.AboutmeDivRight>
    </S.AboutmeDiv>
  )
}
