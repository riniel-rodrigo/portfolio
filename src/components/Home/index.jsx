import { Introduction } from "./Introduction/index.jsx"
import { AboutMe } from "./AboutMe/index.jsx"
import { Projects } from "./ProjectsSection/index.jsx"

import * as S from "./style.js";

export default function Home() {
  return (
    <S.Main>
        <Introduction />
        <AboutMe />
        <Projects />
    </S.Main>
  )
}
