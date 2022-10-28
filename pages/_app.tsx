import "../styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </>
  )
}

export default MyApp
