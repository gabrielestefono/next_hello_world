import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title> Página Principal </title>
        <meta name="keywords" content="Roupas, calçados, bonés"></meta>
        <meta name="description" content="Encontre a melhor roupa para você"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Hello World! Next.JS!</h1>
        <Image src="/images/city.jpg" height="500" width="350" alt="Cidade a noite"></Image>
      </div>
    </>
  )
}
