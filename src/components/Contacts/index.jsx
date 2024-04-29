import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// import { MailForm } from "./components/MailForm/index.jsx";
import { mockContact } from "../../mocks/mockContact.jsx";
import Icon from "../commons/icons/index.jsx";
import CopyButton from "../commons/CopyButton/index.jsx";
import { MailForm } from "./components/MailForm/index.jsx";

import * as S from "./style.js";

export default function Contacts() {
  const [data, setData] = useState(mockContact);
  const [visible, setVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <title>Contatos | Riniel</title>
      </Head>

      <S.ContainerMain>
        <S.ContainerContacts>

          <S.Contacts>
            <S.divTitle>
              <h1>Contatos</h1>
              <div onClick={() => setVisible(!visible)}>
                {visible ? <Icon icon="eyeOff" /> : <Icon icon="eye" />}
              </div>
            </S.divTitle>

            <S.divUlLetter>
              <S.Ul>
                {data.map((item) => (
                  <li key={data.id}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" >
                      <S.divItem>
                        <div>{item.icon}</div>
                        <span>{item.title}</span>
                      </S.divItem>

                      <S.divLink style={{ opacity: visible ? 1 : 0 }}>
                        <span>{item.link}</span>
                        <CopyButton textCopy={item.link} />
                      </S.divLink>
                    </a>

                  </li>
                ))}
              </S.Ul>

              <S.DivLetterImg>
                <Image
                  src="/carta.png"
                  width={300}
                  height={300}
                  alt="Ilustração de uma carta"
                />
              </S.DivLetterImg>
            </S.divUlLetter>
          </S.Contacts>

          <MailForm />
        </S.ContainerContacts>

        <S.footer>
          <p>Made by Riniel Rodrigo - 2024 ❤</p>
        </S.footer>

      </S.ContainerMain>
    </motion.div>
  );
}