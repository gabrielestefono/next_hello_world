import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    return {
      paths: [], // Nenhum caminho pré-definido, pois os IDs serão gerados dinamicamente
      fallback: 'blocking',
    };
  }

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const comentarios = await data.json();
    return {
        props: {comentarios},
    }
}

export default function Comentarios({comentarios}){
    const router = useRouter();
    const commentsId = router.query.commentsId;
    const comentario = comentarios.find((item)=>item.id == commentsId)
    return(
        <>
            <Link href={`/todos/${commentsId}`}>Retornar</Link>
            <h1>Comentário do produto: {commentsId} </h1>
            <p>{comentario.title}</p>
        </>
    )
}