import Navbar from './Navbar';
import Footer from './Footer';

import Styles from '../styles/MainContainer.module.css';

export default function({children}){
    return(
        <>
            <Navbar/>
            <div className={Styles.container}>
                {children}
            </div>
            <Footer/>
        </>
    )
}