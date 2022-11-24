import React from "react"

interface IProps {
  children: React.ReactNode
  handlePop?: () => void
}

const Modal = ({ children, handlePop }: IProps) => {
  console.log(children)
  return (
    <div
      onClick={handlePop}
      className="fixed top-0 left-0 z-50 h-full w-full cursor-pointer bg-regal-blue"
    >
      {children}
    </div>
  )
}

export default Modal
