import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { mockProjects } from "../../../mocks/mockProjects.jsx";

import * as S from "./style.js";

export const Projects = () => {
  const [data, setData] = useState(mockProjects);

  return (
    <S.Article>
      <h1>Projetos Recentes</h1>

      <S.Ul>
        {data.map((item, index) => (
          <Link href={""} key={item.id}>
            <li>
              <Image
                src={item.image.url}
                alt={item.image.alt}
                width={219}
                height={300}
              />
              <span>{item.name}</span>
              <S.divIndex>
                <span>{index + 1}</span>
              </S.divIndex>
            </li>
          </Link>
        ) ) }
      </S.Ul>
    </S.Article>
  )
}