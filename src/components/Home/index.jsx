import { motion } from "framer-motion";

import { Introduction } from "./components/Introduction/index.jsx"
import { AboutMe } from "./components/AboutMe/index.jsx"
import { Projects } from "./components/ProjectsSection/index.jsx"

import * as S from "./style.js";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <S.Main>
        <Introduction />
        <AboutMe />

        <S.ProjectsTitle>
          <h2>Projetos</h2>
          <Projects />
        </S.ProjectsTitle>
      </S.Main>
    </motion.div>
  )
}
