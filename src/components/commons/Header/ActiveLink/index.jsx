import { usePathname } from "next/navigation";
import Link from "next/link";

import * as S from "./style.js";

export const ActiveLink = ({ href, children, onClick }) => {
    const pathname = usePathname();
    const isActive = pathname === href.toString();

    return (
        <S.StyledLink $isActive={isActive} onClick={onClick}>
            <Link href={href}>{children}</Link>
        </S.StyledLink>
        
    );
};
