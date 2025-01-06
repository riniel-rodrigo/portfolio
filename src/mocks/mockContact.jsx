import { v4 as uuid } from "uuid";

import Icon from "../components/commons/icons/index.jsx";

export const mockContact = [
  {
    id: uuid(),
    icon: <Icon icon="mail" />,
    title: "E-mail",
    link: "rinielrodrigo555@gmail.com",
    href: "mailto:rinielrodrigo555@gmail.com",
  },

  {
    id: uuid(),
    icon: <Icon icon="linkedin" />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/riniel-rodrigo/",
    href: "https://www.linkedin.com/in/riniel-rodrigo/",
  },

  {
    id: uuid(),
    icon: <Icon icon="github" />,
    title: "GitHub",
    link: "https://github.com/riniel-rodrigo",
    href: "https://github.com/riniel-rodrigo",
  },

  {
    id: uuid(),
    icon: <Icon icon="whats" />,
    title: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=31988537686",
    href: "https://api.whatsapp.com/send?phone=31988537686",
  },
];
