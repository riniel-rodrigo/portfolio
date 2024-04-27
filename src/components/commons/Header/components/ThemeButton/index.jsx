import { motion } from "framer-motion";

import { useTheme } from "../../../Context/ThemeContext.jsx"
import Icon from '../../../icons/index.jsx';

import * as S from './style.js';

export const ThemeButton = () => {

    const { $backgroundTheme, setBackgroundTheme } = useTheme();

    const toggleTheme = () => {
        $backgroundTheme === "light"
            ? setBackgroundTheme("dark")
            : setBackgroundTheme("light");
    }

    return (
        <S.divThemeIcon onClick={toggleTheme}>
            <motion.div
                key={$backgroundTheme}
                initial={{ opacity: 0, rotate: 180 }} 
                animate={{ opacity: 1, rotate: 360 }} 
                transition={{ duration: 0.7 }} 
            >
                {$backgroundTheme === "light" ? (
                    <Icon icon="sun" />
                ) : (
                    <Icon icon="moon" />
                )}
            </motion.div>
        </S.divThemeIcon>
    );
};