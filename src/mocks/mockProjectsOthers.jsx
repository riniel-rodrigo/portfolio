import { v4 as uuid } from "uuid";
import Icon from "../components/commons/icons/index.jsx";
import Button from "@/components/commons/Button/index.jsx";
import Badge from "@/components/commons/Badge/index.jsx";

export const mockProjectsOthers = [
  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/AaREPPR.png",
      alt: "Interfaces do projeto em diferentes dispositivos",
    },
    badge1: <Badge color="#000" background="#81E0FF" content="React" />,
    badge2: <Badge color="#FFF" background="#CF6C9C" content="Sass" />,
    name: "VNW Lib",
    description:
      "O projeto desenvolvido com o objetivo de consolidar alguns conhecimentos. O site apresenta uma interface simples e funcional, simulando uma biblioteca online.",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/lib-vnw"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
    deployButton: (
      <Button
        target="_blank"
        dark
        href="https://lib-vnw.vercel.app/"
        content="Acesse"
        children={<Icon icon="window" />}
      />
    ),
  },

  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/yz8jKaf.png",
      alt: "Interfaces do projeto Mc Donald's em diferentes dispositivos",
    },
    badge1: <Badge color="#000" background="#81E0FF" content="React" />,
    badge2: (
      <Badge color="#FFF" background="#FFAF69" content="Styled Components" />
    ),
    name: "Mc Donald's",
    description:
      "Criação de uma interface inspirada na loja do Mc Donald's, com o intuito de praticar React e outros conceitos.",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/mc-donalds-vnw"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
    deployButton: (
      <Button
        target="_blank"
        dark
        href="https://mc-donalds-coral.vercel.app/"
        content="Acesse"
        children={<Icon icon="window" />}
      />
    ),
  },

  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/8ITK9CB.png",
      alt: "Interfaces do projeto Self Care em diferentes dispositivos",
    },
    badge2: <Badge color="#FFF" background="#FC4F13" content="HTML" />,
    badge3: <Badge color="#FFF" background="#254BDD" content="CSS" />,
    name: "Self Care",
    description:
      "Self Care é a simulação de um site comercial de produtos de beleza e cuidados pessoais. O projeto foi desenvolvido com o intuito de praticar o desenvolvimento de interfaces responsivas e outros conceitos.",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/selfcare"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
    deployButton: (
      <Button
        target="_blank"
        dark
        href="https://riniel-rodrigo.github.io/selfcare/"
        content="Acesse"
        children={<Icon icon="window" />}
      />
    ),
  },

  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/5I0AB7I.png",
      alt: "Interfaces do projeto em diferentes dispositivos",
    },
    badge1: <Badge color="#000" background="#81E0FF" content="React" />,
    badge2: <Badge color="#FFF" background="#CF6C9C" content="Sass" />,
    name: "VNW Lib",
    description:
      "Este é um projeto é uma página informativa criado para a campanha Outubro Rosa, que visa conscientizar sobre a importância da prevenção e diagnóstico precoce do câncer de mama.",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/outubro-rosa"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
    deployButton: (
      <Button
        target="_blank"
        dark
        href="https://outubro-rosa-nu-eight.vercel.app/"
        content="Acesse"
        children={<Icon icon="window" />}
      />
    ),
  },

  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/13dwKJS.png",
      alt: "Interfaces do projeto Marcae em diferentes dispositibvos",
    },
    badge1: <Badge color="#000" background="#EFD81D" content="Javascript" />,
    badge2: <Badge color="#FFF" background="#FC4F13" content="HTML" />,
    badge3: <Badge color="#FFF" background="#254BDD" content="CSS" />,
    name: "Marcaê",
    description:
      'O projeto consiste em um site que facilite a promoção de eventos pagos ou gratuitos, funcionando como uma bilheteria online. "Marcaê" e bora!!',
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/MARCAE"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
  },
];
