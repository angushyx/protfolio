/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"
import { motion as m } from "framer-motion"
import { ModalToggle } from "../typeScript"

type pathName = {
  pathName: string
}

const Header = ({ pathName }: pathName) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpen((pre) => !pre)
  }

  return (
    <>
      <Modal isOpen={isOpen} handleToggle={handleToggle} />
      <header>
        <div className="flex h-10 items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 object-contain text-sm text-slate-50 drop-shadow-2xl sm:text-lg md:h-16 md:text-2xl">
          Open to opportunities Contact Me
          <Link href="/contact">
            <span className="ml-3 flex items-center gap-3 text-sm underline-offset-4 hover:cursor-pointer hover:underline md:text-2xl">
              Click here
              <svg className="h-3 w-3 animate-bounce md:h-6 md:w-6">
                <FaArrowRight />
              </svg>
            </span>
          </Link>
        </div>
        <div className="container flex items-center justify-between py-6 md:py-8">
          <div className="h-16 w-16">
            <Link href="/">
              <Image
                src="https://i.imgur.com/y7fKZP2.png"
                alt="my avatar"
                width="100%"
                height="100%"
                objectFit="cover"
                className="rounded-full hover:cursor-pointer"
              />
            </Link>
          </div>
          <div
            onClick={handleToggle}
            className="relative z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black md:hidden"
          >
            <div className="absolute top-4 h-0.5 w-6/12 -translate-y-1/2 bg-white before:absolute before:top-2 before:h-0.5 before:w-full before:bg-white  before:content-[''] after:absolute  after:top-4 after:h-0.5 after:w-full after:bg-white after:content-['']"></div>
          </div>
          <nav className="hidden md:block">
            <ul className=" gap-6 md:flex md:text-lg ">
              <li
                key="home"
                className={`cursor-pointer hover:text-cyan-500 ${
                  pathName === "/" ? "text-cyan-500" : ""
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                key="work"
                className={`cursor-pointer hover:text-cyan-500 ${
                  pathName.includes("work") ? "text-cyan-500" : ""
                }`}
              >
                <Link href="/work">Work</Link>
              </li>

              <Link href="/blogs">
                <li
                  key="blogs"
                  className={`cursor-pointer hover:text-cyan-500 ${
                    pathName === "/blogs" ? "text-cyan-500" : ""
                  }`}
                >
                  Blogs
                </li>
              </Link>
              <Link href="/about">
                <li
                  key="about"
                  className={`cursor-pointer hover:text-cyan-500 ${
                    pathName === "/about" ? "text-cyan-500" : ""
                  }`}
                >
                  About Me
                </li>
              </Link>
              <Link href="/contact">
                <li
                  key="contact"
                  className={`cursor-pointer hover:text-cyan-500 ${
                    pathName === "/contact" ? "text-cyan-500" : ""
                  }`}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export const Modal = ({ isOpen, handleToggle }: ModalToggle) => {
  return (
    <m.div
      initial={
        !isOpen
          ? {
              opacity: 0,
              x: "100%",
              y: "-75%",
              position: "absolute",
              width: "0",
            }
          : {}
      }
      animate={isOpen ? { opacity: 1, x: "0", y: "0", width: "100%" } : {}}
      transition={isOpen ? { duration: 0.4, ease: "easeOut" } : {}}
      className={`absolute z-20 h-screen w-screen bg-gradient-to-tr from-yellow-400 to-amber-600 md:hidden`}
      style={{ display: "none" }}
    >
      <nav className="absolute z-30 mt-24 h-full w-full text-white">
        <m.ul
          initial={!isOpen ? { opacity: 0, position: "absolute" } : {}}
          animate={isOpen ? { opacity: 1 } : {}}
          transition={isOpen ? { duration: 0.8, ease: "easeOut" } : {}}
          className={`h-full w-full text-center text-3xl`}
        >
          <Link href="/">
            <m.li
              initial={!isOpen ? { x: "-100%" } : {}}
              animate={isOpen ? { x: "0" } : { position: "absolute" }}
              transition={isOpen ? { duration: 1, ease: "easeOut" } : {}}
              onClick={handleToggle}
              className="my-5 cursor-pointer py-3 hover:text-cyan-500"
            >
              Home
            </m.li>
          </Link>
          <Link href="/work">
            <m.li
              initial={!isOpen ? { x: "-100%" } : {}}
              animate={isOpen ? { x: "0" } : { position: "absolute" }}
              transition={
                isOpen ? { duration: 0.5, ease: "easeOut", delay: 0.3 } : {}
              }
              onClick={handleToggle}
              className="my-5 cursor-pointer py-3 hover:text-cyan-500"
            >
              Work
            </m.li>
          </Link>
          <Link href="/blogs">
            <m.li
              initial={!isOpen ? { x: "-100%" } : {}}
              animate={isOpen ? { x: "0" } : { position: "absolute" }}
              transition={
                isOpen ? { duration: 0.5, ease: "easeOut", delay: 0.4 } : {}
              }
              onClick={handleToggle}
              className="my-5 cursor-pointer py-3 hover:text-cyan-500"
            >
              Blogs
            </m.li>
          </Link>
          <Link href="/about">
            <m.li
              initial={!isOpen ? { x: "-100%" } : {}}
              animate={isOpen ? { x: "0" } : { position: "absolute" }}
              transition={
                isOpen ? { duration: 0.5, ease: "easeOut", delay: 0.5 } : {}
              }
              onClick={handleToggle}
              className="my-5 cursor-pointer py-3 hover:text-cyan-500"
            >
              About Me
            </m.li>
          </Link>
          <Link href="/contact">
            <m.li
              initial={!isOpen ? { x: "-100%" } : {}}
              animate={isOpen ? { x: "0" } : { position: "absolute" }}
              transition={
                isOpen ? { duration: 0.5, ease: "easeOut", delay: 0.6 } : {}
              }
              onClick={handleToggle}
              className="my-3 cursor-pointer py-3 hover:text-cyan-500"
            >
              Contact
            </m.li>
          </Link>
        </m.ul>
      </nav>
    </m.div>
  )
}

export default Header
