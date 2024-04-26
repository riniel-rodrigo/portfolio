import React from 'react';

import { useTheme } from "../../Context/ThemeContext.jsx"
import Icon from '../../icons/index.jsx';

import * as S from './style.js';

export const ThemeButton = () => {

    const { $backgroundTheme, setBackgroundTheme } = useTheme();

    const toggleTheme = () => {
        $backgroundTheme === "light" ? setBackgroundTheme("dark") : setBackgroundTheme("light");
    }

    return (
        <S.divThemeIcon onClick={toggleTheme}>
            {$backgroundTheme === "light" ? (
                <Icon icon="sun" />
            ) : (
                <Icon icon="moon" />
            )}
        </S.divThemeIcon>
    );
};