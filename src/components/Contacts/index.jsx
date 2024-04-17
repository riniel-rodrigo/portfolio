import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import { mockContact } from "../../mocks/mockContact.jsx";

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
        <S.divTitle>
          <h1>Contatos</h1>
          <span onClick={()=> setVisible(!visible)} >Mostrar links</span>
        </S.divTitle>
        <S.Ul style={{height: visible ? "70%" : "50%"}} >
          {data.map((item) => (
            <li>
              <a
                href={item.href}>
                <S.divItem>
                  <div>{item.icon}</div>
                  <span>{item.title}</span>
                </S.divItem>
                <div>
                  <span style={{display: visible ? "block" : "none"}} >{item.link}</span>
                </div>
              </a>
            </li>
          ))}
        </S.Ul>
      </S.ContainerContacts>
    </>
  );
}
