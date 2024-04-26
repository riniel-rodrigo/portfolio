import * as S from "./style.js";
import { useTheme } from "../Context/ThemeContext.jsx";

export default function Button({ content, dark, children, PaddingSm, href, target }) {
    const { $backgroundTheme } = useTheme();

    return (
        <S.Button
            target={target}
            href={href}
            $PaddingSm={PaddingSm}
            $backgroundTheme={$backgroundTheme}
            $dark={dark}>
            {content} {children}
        </S.Button>
    );
}
