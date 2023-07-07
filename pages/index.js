import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.container}>  
        <Navbar></Navbar>
        <h1>Hello World! Next.JS!</h1>
      </div>
    </>
  )
}
