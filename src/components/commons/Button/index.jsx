import * as S from "./style.js";
import { useTheme } from "../Context/ThemeContext.jsx";

export default function Button({ content, dark, children, PaddingSm }) {
    const { BackgroundTheme } = useTheme();

    return (
        <S.Button
            PaddingSm={PaddingSm}
            BackgroundTheme={BackgroundTheme}
            dark={dark}>
            {content} {children}
        </S.Button>
    );
}
