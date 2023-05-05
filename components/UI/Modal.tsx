import React from "react"
import { motion as m } from "framer-motion"

interface IProps {
  children: React.ReactNode
  handlePop?: () => void
  showModal: boolean
}

const Modal = ({ children, showModal, handlePop }: IProps) => {
  return (
    <m.div
      initial={
        showModal
          ? {
              opacity: 0,
            }
          : {}
      }
      animate={showModal ? { opacity: 1 } : {}}
      transition={showModal ? { duration: 1, ease: "easeInOut" } : {}}
      onClick={handlePop}
      className="fixed top-0 left-0 z-50 h-full w-full cursor-pointer bg-regal-blue"
    >
      {children}
    </m.div>
  )
}

export default Modal
