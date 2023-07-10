import Link from "next/link";

export default function notFound(){
    return (
        <>
            <h1>Erro 404 - Perdeu Preyboy</h1>
            <p>Parece que esta página não existe</p>
            <Link href={"/"}>Voltar</Link>
        </>
    )
}