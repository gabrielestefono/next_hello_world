import Link from 'next/link';
import Styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
      <>
        <ul className={Styles.navbar}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Produtos</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li>
              <Link href="/contact">Contato</Link>
            </li>
        </ul>
      </>
    )
}