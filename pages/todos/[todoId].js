import Link from "next/link";
import { useRouter } from "next/router"

export default function Todos(){

    const router = useRouter();

    const todoId = router.query.todoId;

    return(
        <>
            <Link href="/todos">Voltar</Link>
            <h1>Mostrando o Todo: {todoId}</h1>
            <p> Comentário: lalala...<Link href={'/comments/' + todoId}>Detalhes</Link></p>
        </>
    )

}