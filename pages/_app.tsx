import "../styles/globals.css"
import type { AppProps } from "next/app"

import Header from "../components/Header"
import Footer from "../components/Footer"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence initial={false}>
        <Header />
        <Component key={router.pathname} {...pageProps} />
        <Footer />
      </AnimatePresence>
    </>
  )
}

export default MyApp
