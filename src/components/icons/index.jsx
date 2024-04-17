import { IconContext } from 'react-icons';

import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Icon({ icon, color, size }) {
    const iconMapping = {
        mail: MdOutlineMail,
        linkedin: CiLinkedin,
        github: FaGithub,
        whats: FaWhatsapp
    };

    const IconComponent = iconMapping[icon];

    return (
        <IconContext.Provider value={{ color, size }}>
            <IconComponent />
        </IconContext.Provider>
    );
}