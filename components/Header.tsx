import React from "react"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

const Header = () => {
  return (
    <>
      <header className="bg-yellow-400">
        <div className="flex h-16 items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 object-contain text-slate-50 sm:text-lg md:text-2xl">
          Open to opportunities Contact Me{" "}
          <span className="ml-3 flex items-center gap-3 text-sm underline-offset-8 hover:cursor-pointer hover:underline md:text-2xl">
            Click here
            <FaArrowRight />
          </span>
        </div>
        <div className="container flex items-center justify-between py-8">
          <div className="h-16 w-16 ">
            <img
              src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="my avatar"
              className="h-full w-full rounded-full object-cover hover:cursor-pointer"
            />
          </div>
          {/* TODO:點下去之後要有動畫 */}
          <div className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black md:hidden">
            <div className="absolute top-4 h-0.5 w-6/12 -translate-y-1/2 bg-white before:absolute before:top-2 before:h-0.5 before:w-full before:bg-white  before:content-[''] after:absolute  after:top-4 after:h-0.5 after:w-full after:bg-white after:content-['']"></div>
          </div>
          <ul className="hidden gap-10 md:flex md:text-lg lg:text-2xl ">
            <li className="cursor-pointer hover:text-cyan-500">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-cyan-500">
              <Link href="/work">Work</Link>
            </li>

            <Link href="/blogs">
              <li className="cursor-pointer hover:text-cyan-500">Blogs</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer hover:text-cyan-500">About Me</li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer hover:text-cyan-500">Contact</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
