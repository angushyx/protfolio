import "../styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/router"
import TawkMessengerReact from "@tawk.to/tawk-messenger-react"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <AnimatePresence>
        <Header pathName={router.pathname} />
        <Component {...pageProps} />
        <TawkMessengerReact
          propertyId={process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID}
          widgetId={process.env.NEXT_PUBLIC_TWAKTO_WIDGET_ID}
        />
        <Footer />
      </AnimatePresence>
    </>
  )
}

export default MyApp
