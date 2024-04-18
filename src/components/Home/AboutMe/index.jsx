import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import profilepic from "../../../../public/sp-icon.png";

import * as S from "./style.js";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function AboutMe() {
  return (
    <S.Main>
      <S.AboutmeDiv>
        <S.AboutmeDivLeft>
          <S.InfoDiv>
            <h1>
              Prazer, sou&nbsp;
              <span>Riniel Rodrigo</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti mollitia voluptas ab ipsum maiores id aperiam laudantium omnis dolore, quis voluptates blanditiis et aspernatur laborum sed veniam repellat modi odio.</p>
            <Link href="/contacts" >Converse comigo!</Link>
          </S.InfoDiv>

          <S.BadgeDiv className={jetbrains_mono.className}>
            <ul>
              <li style={{ backgroundColor: '#6BDDFA', color: '#000000' }} >react</li>
              <li style={{ backgroundColor: '#EFD81D', color: '#000000' }} >javascript</li>
              <li style={{ backgroundColor: '#000000', color: '#FFFFFF' }} >next.js</li>
              <li style={{ backgroundColor: '#0D9614', color: '#FFFFFF' }} >c#</li>
              <li style={{ backgroundColor: '#4A7DA4', color: '#FFFFFF' }} >sql</li>
            </ul>
          </S.BadgeDiv>
        </S.AboutmeDivLeft>

        <S.AboutmeDivRight>
          <Image className="circle" src="https://avatars.githubusercontent.com/u/80684745?s=400&u=7474a1b0926a6f8760135dc3b0e2c5b3d8561482&v=4" alt="Foto de perfil Riniel" unoptimized width={300} height={300} />
        </S.AboutmeDivRight>
      </S.AboutmeDiv>

    </S.Main>
  )
}
