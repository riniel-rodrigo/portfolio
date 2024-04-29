import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTheme } from "../../../commons/Context/ThemeContext.jsx";
import Icon from "../../../commons/icons/index.jsx";
import { Button2 } from "../../../commons/Button/style.js";

import * as S from "./style.js";

export const MailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.warn('Preencha todos os campos!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
      });
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_xeg7x8h", "template_w8qvhkc", templateParams, "xUmsrwbERk7G-9rAr")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success('Mensagem enviada, obrigado por entrar em contato!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
        setName("");
        setEmail("");
        setMessage("");

      }, (error) => {
        console.log("FAILED...", error);
        toast.error('Falha ao enviar mensagem, tente novamente!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
      })
  }

  const { $backgroundTheme } = useTheme();

  return (
    <S.Form onSubmit={sendMail}>
      <ToastContainer />

      <S.divTitle>
        <h1>Mande uma mensagem</h1>
      </S.divTitle>

      <S.Fields>
        <S.FieldUser>
          <div>
            <label htmlFor="">Nome:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </S.FieldUser>

        <S.divTextArea>
          <div>
            <label htmlFor="">Mensagem:</label>
            <textarea
              cols="30"
              rows="10"
              placeholder="Digite sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>

          <S.divSend>
            <Button2 $backgroundTheme={$backgroundTheme}>
              <Icon icon="send" size={22} />
              <input type="submit" />
            </Button2>
          </S.divSend>
        </S.divTextArea>
      </S.Fields>
    </S.Form>
  );
};
