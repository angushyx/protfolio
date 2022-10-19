import React from "react"
import { FaArrowRight } from "react-icons/fa"

const Header = () => {
  return (
    <>
      <header className="bg-yellow-400">
        <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 object-contain text-slate-50 items-center justify-center h-16 sm:text-lg md:text-2xl">
          Open to opportunities Contact Me{" "}
          <span className="flex items-center gap-3 ml-3 hover:cursor-pointer hover:underline underline-offset-8 text-sm md:text-2xl">
            Click here
            <FaArrowRight />
          </span>
        </div>
        <div className="container flex items-center justify-between py-8 text-2xl">
          <div className="w-16 h-16 ">
            <img
              src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="my avatar"
              className="object-cover rounded-full h-full w-full hover:cursor-pointer"
            />
          </div>
          <div className="w-16 h-16 ">
            <div className="before:content-[attr(before)] hover:before:content-[attr(after)]"></div>
          </div>
          <ul className="hidden md:flex gap-10">
            <li className="hover:text-cyan-500 cursor-pointer">Home</li>
            <li className="hover:text-cyan-500 cursor-pointer">Work</li>
            <li className="hover:text-cyan-500 cursor-pointer">Blogs</li>
            <li className="hover:text-cyan-500 cursor-pointer">About Me</li>
            <li className="hover:text-cyan-500 cursor-pointer">contact</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
