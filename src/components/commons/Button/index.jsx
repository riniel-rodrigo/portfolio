import * as S from './index.js';


export default function Button({content, dark, children}){

    return(
        <S.Button dark={dark} >{content} {children} </S.Button>
    )

}