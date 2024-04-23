import { IconContext } from 'react-icons';

import { MdOutlineMail, MdMenu, MdOutlineMenuOpen } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { PiFilePdfLight } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Icon({ icon, color, size }) {
    const iconMapping = {
        mail: MdOutlineMail,
        linkedin: CiLinkedin,
        github: FaGithub,
        whats: FaWhatsapp,
        copy: IoCopyOutline,
        send: LuSend,
        menu: MdMenu,
        menuClose: MdOutlineMenuOpen,
        pdf: PiFilePdfLight,
        arrowDown: IoIosArrowDown,
        arrowUp: IoIosArrowUp,
    };

    const IconComponent = iconMapping[icon];

    return (
        <IconContext.Provider value={{ color, size }}>
            <IconComponent />
        </IconContext.Provider>
    );
}