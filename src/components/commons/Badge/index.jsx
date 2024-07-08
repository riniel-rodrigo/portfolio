import { JetBrains_Mono } from "next/font/google";
import * as S from "./style.js";

const jetbrains_mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: "400",
  });

export default function Badge({color, background, content}) { 
  return (
    <div>
        <S.BadgeDiv color={color} background={background} className={jetbrains_mono.className}>
            <li>
              {content}
            </li>
        </S.BadgeDiv>
    </div>
  )
}
