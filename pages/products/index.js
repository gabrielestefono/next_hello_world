import Link from 'next/link';
import Head from 'next/head';


export default function Products(){
    return (
        <>
            <Head>
                <title>Página de Produtos</title>
            </Head>
            <h1> Produtos </h1>
            <Link href="/">Voltar</Link>
        </>
        
    )
}