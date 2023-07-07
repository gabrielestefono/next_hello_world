import '@/styles/globals.css';
import MainConteiner from '../components/MainContainer';

export default function App({ Component, pageProps }) {
  return (
    <MainConteiner>
      <Component {...pageProps} />
    </MainConteiner>)
}
