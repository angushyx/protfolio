import "../styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <AnimatePresence>
        <Header pathName={router.pathname} />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </>
  )
}

export default MyApp
