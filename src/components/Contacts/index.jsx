import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { mockContact } from "../../mocks/mockContact.jsx";
import Icon from "../commons/icons/index.jsx";
import Button from "../commons/Button/index.jsx";
import CopyButton from "../commons/CopyButton/index.jsx";

import * as S from "./style.js";

export default function ContactsContent() {
  const [data, setData] = useState(mockContact);
  const [visible, setVisible] = useState(false);

  return (
    <>
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

          <S.Form>
            <S.divTitle>
              <h1>Mande uma mensagem</h1>
            </S.divTitle>

            <S.Fields>
              <S.FieldUser>
                <div>
                  <label htmlFor="">Nome:</label>
                  <input type="text" placeholder="Digite seu nome" />
                </div>

                <div>
                  <label htmlFor="">Email:</label>
                  <input type="email" placeholder="Digite seu email" />
                </div>

                <div>
                  <label htmlFor="">Assunto:</label>
                  <input type="text" placeholder="Digite o assunto" />
                </div>
              </S.FieldUser>

              <S.divTextArea>
                <div>
                  <label htmlFor="">Mensagem:</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Digite sua mensagem"
                  ></textarea>
                </div>

                <S.divSend>
                  <Button
                    content={<Icon icon="send" size={24} />}
                    children="Enviar"
                  />
                </S.divSend>
              </S.divTextArea>
            </S.Fields>
          </S.Form>
        </S.ContainerContacts>
        <S.footer>
          <p>Made by Riniel Rodrigo - 2024 ❤</p>
        </S.footer>
      </S.ContainerMain>
    </>
  );
}
