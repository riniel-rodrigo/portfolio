import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import Icon from "../../../commons/icons/index.jsx";
import * as S from "./style.js";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const AboutMe = () => {
  const [view, setView] = useState(false);

  const viewMore = () => {
    setView(!view);
    console.log(view);
  };

  return (
    <S.ContainerAboutMe>
      <S.divLeft>
        <Image
          className="circle"
          src="https://avatars.githubusercontent.com/u/80684745?v=4"
          width={275}
          height={275}
          unoptimized
        />

        <S.BadgeDiv className={jetbrains_mono.className}>
          <ul>
            <li style={{ backgroundColor: "#6BDDFA", color: "#000000" }}>
              react
            </li>
            <li style={{ backgroundColor: "#EFD81D", color: "#000000" }}>
              javascript
            </li>
            <li style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
              next.js
            </li>
            <li style={{ backgroundColor: "#0D9614", color: "#FFFFFF" }}>c#</li>
            <li style={{ backgroundColor: "#4A7DA4", color: "#FFFFFF" }}>
              sql
            </li>
          </ul>
        </S.BadgeDiv>
      </S.divLeft>

      <S.divRight>
        <h1>Sobre mim</h1>
        <div>
          <p>
            Olá! Meu nome é Riniel Rodrigo, tenho 20 anos e moro em Belo
            Horizonte, Minas Gerais. Quando era mais jovem, conheci a
            programação através das linguagens Java e C, criando pequenos
            programas e explorando.
          </p>

          <motion.div>
            {view === true ? (
              <>
                <motion.p
                  key={view}
                  initial={{ height: view ? 0 : "100%", opacity: view ? 0 : 1 }}
                  animate={{ height: view ? "100%" : 0, opacity: view ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Em meados de 2023, decidi me aprofundar verdadeiramente na área, retomando
                  meus estudos com foco em C# e desenvolvimento web. Atualmente,
                  estou cursando Análise e Desenvolvimento de Sistemas na
                  PUC-MINAS e também participando de outros cursos relacionados.
                </motion.p>

                <p>
                  Tenho um amor pela tecnologia e pela área de desenvolvimento,
                  desde o levantamento de requisitos até a escrita de código.
                  Pretendo continuar me fascinando com esse mundo enquanto me
                  torno um profissional de qualidade.
                </p>
              </>
            ) : (
              <S.Preview>
                <p>
                  Em meados de 2023, decidi me aprofundar verdadeiramente na área, retomando
                  meus estudos..
                </p>
              </S.Preview>
            )}
          </motion.div>

          <S.viewMoreDiv>
            {view === true ? (
              <span onClick={viewMore}>
                {" "}
                {<Icon icon="arrowUp" />} ver menos{" "}
              </span>
            ) : (
              <span onClick={viewMore}>
                {" "}
                {<Icon icon="arrowDown" />} ver mais{" "}
              </span>
            )}
          </S.viewMoreDiv>
        </div>
      </S.divRight>
    </S.ContainerAboutMe>
  );
};
