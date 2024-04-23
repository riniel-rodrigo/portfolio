import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";

import * as S from "./style.js";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const AboutMe = () => {
  return (
    <S.ContainerAboutMe>
      <S.divLeft>
        <Image
          className="circle"
          src="https://avatars.githubusercontent.com/u/80684745?v=4"
          width={320}
          height={320}
          unoptimized
        />
      </S.divLeft>

      <S.divRight>
        <h1>Sobre mim</h1>

        <div>
          <p>Olá! Meu nome é Riniel Rodrigo, tenho 20 anos e moro em Belo Horizonte, Minas Gerais. Quando era mais jovem, conheci a programação através das linguagens Java e C, criando pequenos programas e explorando.</p>
          <p>Em 2023, decidi me aprofundar verdadeiramente na área, retomando meus estudos com foco em C# e desenvolvimento web. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na PUC-MINAS e também participando de outros cursos relacionados.</p>
          <p>Tenho um amor pela tecnologia e pela área de desenvolvimento, desde o levantamento de requisitos até a escrita de código. Pretendo continuar me fascinando com esse mundo enquanto me torno um profissional de qualidade.</p>
        </div>

        <S.BadgeDiv className={jetbrains_mono.className}>
            <ul>
              <li style={{ backgroundColor: '#6BDDFA', color: '#000000' }} >react</li>
              <li style={{ backgroundColor: '#EFD81D', color: '#000000' }} >javascript</li>
              <li style={{ backgroundColor: '#000000', color: '#FFFFFF' }} >next.js</li>
              <li style={{ backgroundColor: '#0D9614', color: '#FFFFFF' }} >c#</li>
              <li style={{ backgroundColor: '#4A7DA4', color: '#FFFFFF' }} >sql</li>
            </ul>
          </S.BadgeDiv>
      </S.divRight>
    </S.ContainerAboutMe>
  );
};
