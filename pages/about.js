import Link from 'next/link';
import Head from 'next/head';

export default function About(){
    return (
        <>
            <Head>
                <title>Página Sobre</title>
            </Head>
            <h1> Página de About </h1>
            <Link href="/">Voltar</Link>
        </>
    )
}