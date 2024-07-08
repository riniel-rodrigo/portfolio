import { v4 as uuid } from 'uuid';
import Icon from "../components/commons/icons/index.jsx";
import Button from '@/components/commons/Button/index.jsx';
import Badge from '@/components/commons/Badge/index.jsx';

export const mockProjects = [

    {
        id: uuid(),
        image: {
            url: "https://i.imgur.com/AfPeFFF.gif",
            alt: "Tela inicial do projeto em diferentes dispositivos",
        },
        badge1: <Badge color="#FFF" background="#293069" content="ASP.NET Core MVC" />,
        badge2: <Badge color="#FFF" background="#2079BA" content="Entity Framework" />,
        name: "EducaTube",
        description: "Este projeto é um portal que oferece vídeos educativos e ferramentas para organizar informações de qualidade sobre vários temas, em um ambiente projetado para facilitar o foco e a concentração, reduzindo distrações durante o estudo.",
        gitButton: <Button target="_blank" dark href="https://github.com/riniel-rodrigo/educa-tube" content="Repositório" children={<Icon icon="github" />} />,
    },

    {
        id: uuid(),
        image: {
            url: "https://i.imgur.com/v0RODdL.png",
            alt: "Tela inicial do projeto em diferentes dispositivos",
        },
        badge1: <Badge color="#FFF" background="#000" content="Next.js" />,
        badge2: <Badge color="#FFF" background="#FFAF69" content="Styled Components" />,
        name: "Portfólio Riniel",
        description: "Veja mais detalhes sobre os bastidores deste portfólio!",
        gitButton: <Button target="_blank" dark href="https://github.com/riniel-rodrigo/portfolio" content="Repositório" children={<Icon icon="github" />} />,
    },

    {
        id: uuid(),
        image: {
            url: "https://i.imgur.com/yz8jKaf.png",
            alt: "Interfaces do projeto Mc Donald's em diferentes dispositivos",
        },
        badge1: <Badge color="#000" background="#81E0FF" content="React Js" />,
        badge2: <Badge color="#FFF" background="#FFAF69" content="Styled Components" />,
        name: "Mc Donald's",
        description: "Criação de uma interface inspirada na loja do Mc Donald's, com o intuito de praticar React e outros conceitos.",
        gitButton: <Button target="_blank" dark href="https://github.com/riniel-rodrigo/mc-donalds-vnw" content="Repositório" children={<Icon icon="github" />} />,
        deployButton: <Button target="_blank" dark href="https://mc-donalds-coral.vercel.app/" content="Acesse" children={<Icon icon="window" />} />,
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
        description: "Text encoder é um encriptador de texto simples e fácil de usar que permite ao usuário codificar e decodificar mensagens de texto. Escreva uma mensagem secreta para alguém!",
        gitButton: <Button target="_blank" dark href="https://github.com/riniel-rodrigo/text-encoder" content="Repositório" children={<Icon icon="github" />} />,
        deployButton: <Button target="_blank" dark href="https://riniel-rodrigo.github.io/text-encoder/" content="Acesse" children={<Icon icon="window" />} />,
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
        description: 'O projeto consiste em um site que facilite a promoção de eventos pagos ou gratuitos, funcionando como uma bilheteria online. "Marcaê" e bora!!',
        gitButton: <Button target="_blank" dark href="https://github.com/riniel-rodrigo/MARCAE" content="Repositório" children={<Icon icon="github" />} />,
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
        description: "Self Care é a simulação de um site comercial de produtos de beleza e cuidados pessoais. O projeto foi desenvolvido com o intuito de praticar o desenvolvimento de interfaces responsivas e outros conceitos.",
        gitButton: <Button target="_blank" dark href="https://github.com/riniel-rodrigo/selfcare" content="Repositório" children={<Icon icon="github" />} />,
        deployButton: <Button target="_blank" dark href="https://riniel-rodrigo.github.io/selfcare/" content="Acesse" children={<Icon icon="window" />} />,
    },

];