import { v4 as uuid } from "uuid";
import Icon from "../components/commons/icons/index.jsx";
import Button from "@/components/commons/Button/index.jsx";
import Badge from "@/components/commons/Badge/index.jsx";

export const mockProjects = [
  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/7KFdgK7.png",
      alt: "Tela inicial do projeto em diferentes dispositivos",
    },
    badge1: <Badge color="#000" background="#81E0FF" content="React" />,
    badge2: <Badge color="#FFF" background="#84C00B" content="Node.js" />,
    name: "Taskly",
    description:
      "Taskly é uma aplicação de gerenciamento de tarefas. Esta aplicação permite aos usuários criar, editar, deletar e ordernar tarefas de forma eficiente.",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/taskly"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
    deployButton: (
      <Button
        target="_blank"
        dark
        href="https://taskly-wine.vercel.app/"
        content="Acesse"
        children={<Icon icon="window" />}
      />
    ),
  },

  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/rEOq5OB.jpeg",
      alt: "Tela inicial do projeto em diferentes dispositivos",
    },
    badge1: <Badge color="#000" background="#81E0FF" content="React Native" />,
    badge2: <Badge color="#FFF" background="#000" content="Expo" />,
    badge3: <Badge color="#FFF" background="#84C00B" content="SQLite" />,

    name: "Mindly",
    description:
      "Mindly é um aplicativo móvel que facilita o acesso a serviços de psicoterapia a preços acessíveis. Veja mais sobre o aplicativo no repositório!",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/RRS-Mindly"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
  },

  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/AfPeFFF.gif",
      alt: "Tela inicial do projeto em diferentes dispositivos",
    },
    badge1: (
      <Badge color="#FFF" background="#293069" content="ASP.NET Core MVC" />
    ),
    badge2: (
      <Badge color="#FFF" background="#2079BA" content="Entity Framework" />
    ),
    name: "EducaTube",
    description:
      "Este projeto é um portal que oferece vídeos educativos e ferramentas para organizar informações de qualidade sobre vários temas, em um ambiente projetado para facilitar o foco e a concentração, reduzindo distrações durante o estudo.",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/educa-tube"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
  },

  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/sgPNBPo.png",
      alt: "Tela inicial do projeto Text Encoder em diferentes dispositivos",
    },
    badge1: <Badge color="#000" background="#EFD81D" content="Javascript" />,
    badge2: <Badge color="#FFF" background="#FC4F13" content="HTML" />,
    badge3: <Badge color="#FFF" background="#254BDD" content="CSS" />,
    name: "Text Encoder",
    description:
      "Text encoder é um encriptador de texto simples e fácil de usar que permite ao usuário codificar e decodificar mensagens de texto. Escreva uma mensagem secreta para alguém!",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/text-encoder"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
    deployButton: (
      <Button
        target="_blank"
        dark
        href="https://riniel-rodrigo.github.io/text-encoder/"
        content="Acesse"
        children={<Icon icon="window" />}
      />
    ),
  },

  {
    id: uuid(),
    image: {
      url: "https://i.imgur.com/v0RODdL.png",
      alt: "Tela inicial do projeto em diferentes dispositivos",
    },
    badge1: <Badge color="#FFF" background="#000" content="Next.js" />,
    badge2: (
      <Badge color="#FFF" background="#FFAF69" content="Styled Components" />
    ),
    name: "Portfólio Riniel",
    description: "Veja mais detalhes sobre os bastidores deste portfólio!",
    gitButton: (
      <Button
        target="_blank"
        dark
        href="https://github.com/riniel-rodrigo/portfolio"
        content="Repositório"
        children={<Icon icon="github" />}
      />
    ),
    deployButton: (
      <Button
        target="_blank"
        dark
        href="https://riniel-portfolio.vercel.app/"
        content="Acesse"
        children={<Icon icon="window" />}
      />
    ),
  },
];
