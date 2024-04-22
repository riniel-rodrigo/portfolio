import Icon from "../icons/index.jsx";

import * as S from "./style.js";

export default function CopyButton({textCopy}) {

    const handleCopy = (event) => {
        event.stopPropagation();
        event.preventDefault()
        navigator.clipboard.writeText(textCopy);
    }

    return (
        <S.iconCopy onClick={handleCopy}>
            <Icon icon="copy" />
        </S.iconCopy>
    );
}
