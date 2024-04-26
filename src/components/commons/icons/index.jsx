import { IconContext } from 'react-icons';

import { MdOutlineMail, MdMenu, MdOutlineMenuOpen } from "react-icons/md";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoMoon } from "react-icons/go";
import { ImSun } from "react-icons/im";
import { PiEye, PiEyeSlash, PiFilePdfLight } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { TfiNewWindow } from "react-icons/tfi";

export default function Icon({ icon, color, size }) {
    const iconMapping = {
        mail: MdOutlineMail,
        linkedin: FaLinkedin,
        github: FaGithub,
        whats: FaWhatsapp,
        copy: IoCopyOutline,
        send: LuSend,
        menu: MdMenu,
        menuClose: MdOutlineMenuOpen,
        pdf: PiFilePdfLight,
        arrowDown: IoIosArrowDown,
        arrowUp: IoIosArrowUp,
        moon: GoMoon,
        sun: ImSun,
        eye: PiEye,
        eyeOff: PiEyeSlash,
        window: TfiNewWindow,
    };

    const IconComponent = iconMapping[icon];

    return (
        <IconContext.Provider value={{ color, size }}>
            <IconComponent />
        </IconContext.Provider>
    );
}