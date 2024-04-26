import { v4 as uuid } from 'uuid';
import Icon from "../components/commons/icons/index.jsx";
import Button from '@/components/commons/Button/index.jsx';

export const mockProjects = [
    {
        id: uuid(),
        image: {
            url: "https://i.imgur.com/sgPNBPo.png",
            alt: "Tela inicial do projeto Text Encoder em diferentes dispositivos",
        },
        badges: "",
        name: "Text Encoder",
        description: "Text encoder é um encriptador de texto simples e fácil de usar que permite ao usuário codificar e decodificar mensagens de texto. Escreva uma mensagem secreta para alguém!",
        gitButton: <Button target="_blank"  dark href="https://github.com/riniel-rodrigo/Text-decoder" content="Repositório" children={<Icon icon="github" />}/>,
        deployButton: <Button target="_blank" dark href="https://riniel-rodrigo.github.io/Text-decoder/" content="Acesse" children={<Icon icon="window" />}/>,
    },

    {
        id: uuid(),
        image: {
            url: "https://i.imgur.com/13dwKJS.png",
            alt: "Interfaces do projeto Marcae em diferentes dispositibvos",
        },
        badges: "",
        name: "Marcaê",
        description: 'O projeto consiste em um site que facilite a promoção de eventos pagos ou gratuitos, funcionando como uma bilheteria online. "Marcaê" e bora!!',
        gitButton: <Button target="_blank"  dark href="https://github.com/riniel-rodrigo/MARCAE" content="Repositório" children={<Icon icon="github" />}/>,
    },  

    {
        id: uuid(),
        image: {
            url: "https://i.imgur.com/8ITK9CB.png",
            alt: "Interfaces do projeto Self Care em diferentes dispositivos",
        },
        badges: "",
        name: "Self Care",
        description: "Self Care é a simulação de um site comercial de produtos de beleza e cuidados pessoais. O projeto foi desenvolvido com o intuito de praticar o desenvolvimento de interfaces responsivas e outros conceitos.",
        gitButton: <Button target="_blank"  dark href="https://github.com/riniel-rodrigo/selfcare" content="Repositório" children={<Icon icon="github" />}/>,
        deployButton: <Button target="_blank" dark href="https://riniel-rodrigo.github.io/selfcare/" content="Acesse" children={<Icon icon="window" />}/>,
    },
];