import React, { useState } from 'react';

import { useTheme } from "../../Context/ThemeContext.jsx"
import Icon from '../../icons/index.jsx';

import * as S from './style.js';

export const ThemeButton = () => {

    const { BackgroundTheme, setBackgroundTheme } = useTheme();

    const toggleTheme = () => {
        BackgroundTheme === "light" ? setBackgroundTheme("dark") : setBackgroundTheme("light");
    }

    return (
        <S.divThemeIcon onClick={toggleTheme}>
            {BackgroundTheme === "light" ? (
                <Icon icon="sun" />
            ) : (
                <Icon icon="moon" />
            )}
        </S.divThemeIcon>
    );
};