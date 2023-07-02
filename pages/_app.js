import Header from '../components/home/Header'
import Footer from '../components/home/Footer'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Header/>
  <Component {...pageProps} />
  <Footer/>

    </div>

  )
}

export default MyApp
