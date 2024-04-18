import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { mockContact } from "../../mocks/mockContact.jsx";
import Icon from "../icons/index.jsx";
import Button from "../commons/Button/index.jsx";

import * as S from "./style.js"

export default function ContactsContent() {

  const [data, setData] = useState(mockContact);

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Contatos | Riniel</title>
      </Head>

      <S.ContainerContacts>
        <S.Contacts>
          <S.divTitle>
            <h1>Contatos</h1>
            <span onClick={() => setVisible(!visible)} >{visible ? "Ocultar links" : "Mostrar links"}</span>
          </S.divTitle>
          <S.Ul>
            {data.map((item) => (
              <li>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer">
                  <S.divItem>
                    <div>{item.icon}</div>
                    <span>{item.title}</span>
                  </S.divItem>

                  <S.divLink>
                    <span style={{ opacity: visible ? 1 : 0 }}>{item.link}</span>
                  </S.divLink>
                </a>

                <S.iconCopy style={{ display: visible ? "flex" : "none" }}>
                  <Icon icon="copy" />
                </S.iconCopy>
              </li>
            ))}
          </S.Ul>
        </S.Contacts>

        <S.Form>
          <S.divTitle>
            <h1>Mande uma mensagem</h1>
          </S.divTitle>

          <S.Field>
            <div>
              <label htmlFor="">Nome:</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>

            <div>
              <label htmlFor="">Email:</label>
              <input type="email" placeholder="Digite seu email" />
            </div>
          </S.Field>

          <S.divTextArea>
            <div>
              <label htmlFor="">Mensagem:</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem"></textarea>
            </div>

            <S.divSend>
              <Button dark={true} content={<Icon icon="send" size={24}/>} children="Enviar" />
            </S.divSend>
          </S.divTextArea>

        </S.Form>
      </S.ContainerContacts>
    </>
  );
}
