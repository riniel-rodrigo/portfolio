import Head from "next/head";
import Link from "next/link";

export default function NotFound(){
    return(
        <>
            <Head>404 | Riniel</Head>

            <h1>404</h1>
            <div>
            <p>Não consegui encontrar essa página!</p>
            <span>Clique no botão abaixo para ir à página inicial</span>
            </div>
            <Link href="/" >ir para página principal</Link>    
        </>
    );
}