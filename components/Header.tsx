/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  return (
    <>
      <Modal />
      <header>
        <div className="flex h-16 items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 object-contain text-slate-50 drop-shadow-2xl sm:text-lg md:text-2xl">
          Open to opportunities Contact Me
          <span className="ml-3 flex items-center gap-3 text-sm underline-offset-4 hover:cursor-pointer hover:underline md:text-2xl">
            Click here
            <svg className="h-3 w-3 animate-bounce md:h-6 md:w-6">
              <FaArrowRight />
            </svg>
          </span>
        </div>
        <div className="container flex items-center justify-between py-8">
          <div className="h-16 w-16">
            <Link href="/">
              <Image
                src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="my avatar"
                width="100%"
                height="100%"
                objectFit="cover"
                className="rounded-full hover:cursor-pointer"
              />
            </Link>
          </div>
          {/* TODO:點下去之後要有動畫 */}
          <div className="relative z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black md:hidden">
            <div className="absolute top-4 h-0.5 w-6/12 -translate-y-1/2 bg-white before:absolute before:top-2 before:h-0.5 before:w-full before:bg-white  before:content-[''] after:absolute  after:top-4 after:h-0.5 after:w-full after:bg-white after:content-['']"></div>
          </div>
          <nav className="hidden md:block">
            <ul className=" gap-6 md:flex md:text-lg ">
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
          </nav>
        </div>
      </header>
    </>
  )
}

export const Modal = () => {
  return (
    <div className="absolute z-20 h-screen w-screen bg-gradient-to-tr from-yellow-400 to-amber-600 md:hidden">
      <nav className="absolute z-30 mt-24 h-full w-full text-white">
        <ul className="h-full text-center text-lg ">
          <li className="my-3 cursor-pointer py-3 hover:text-cyan-500">
            <Link href="/">Home</Link>
          </li>
          <li className="my-3 cursor-pointer py-3 hover:text-cyan-500">
            <Link href="/work">Work</Link>
          </li>

          <Link href="/blogs">
            <li className="my-3 cursor-pointer py-3 hover:text-cyan-500">
              Blogs
            </li>
          </Link>
          <Link href="/about">
            <li className="my-3 cursor-pointer py-3 hover:text-cyan-500">
              About Me
            </li>
          </Link>
          <Link href="/contact">
            <li className="my-3 cursor-pointer py-3 hover:text-cyan-500">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
