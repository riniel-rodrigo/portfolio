import Head from "next/head";
import Link from "next/link";
import { Button2 } from "@/components/commons/Button";

export default function NotFound() {
    return (
        <>
            <Head>404 | Riniel</Head>

            <h1>404</h1>
            <div>
                <p>Não consegui encontrar essa página!</p>
            </div>
        </>
    );
}
