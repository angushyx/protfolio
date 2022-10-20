/* eslint-disable react/no-unescaped-entities */
import React from "react"
import {
  FaArrowRight,
  FaGithub,
  FaMediumM,
  FaReact,
  FaNodeJs,
} from "react-icons/fa"
import { BsLink45Deg, BsEyeFill } from "react-icons/bs"
import { BiDetail } from "react-icons/bi"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import avatar from "../public/avatar.jpg"
import codingProject from "../public/coding-project.png"
import handmadeProject from "../public/handmade-project.png"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"

const Header = () => {
  return (
    <>
      <header>
        <div className="flex h-16 items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 object-contain text-slate-50 sm:text-lg md:text-2xl">
          Open to opportunities Contact Me{" "}
          <span className="ml-3 flex items-center gap-3 text-sm underline-offset-4 hover:cursor-pointer hover:underline md:text-2xl">
            Click here
            <svg className="h-3 w-3 animate-bounce md:h-6 md:w-6">
              <FaArrowRight />
            </svg>
          </span>
        </div>
        <div className="container flex items-center justify-between py-8">
          <div className="h-16 w-16">
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
          <ul className="hidden gap-6 md:flex md:text-lg ">
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

      <section className="container flex justify-center  py-4 md:justify-between">
        <div className="text-center md:text-start">
          <div className="mb-2 flex flex-col  text-2xl">
            Hey!
            <div className="mt-2 text-4xl">
              I'm <span>Angus</span>
            </div>
          </div>
          <div className="text-gray-600 ">I have a passion for technology.</div>
          <TypeAnimation
            sequence={[
              "web developer",
              1000,
              "technical writer",
              2000,
              "oss contributor",
              2000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", color: "#0e7490" }}
          />
          <Link href="/about">
            <div className="flex items-center justify-center text-black md:justify-start">
              Know More <BsLink45Deg />
              <span className="text-gray-600">about me</span>
            </div>
          </Link>
          <div className="mt-3 flex items-center justify-center gap-3 text-lg md:justify-start">
            Follow me
            <ul className="flex justify-center gap-2 ">
              <Link href="https://github.com/angushyx">
                <li className="hover:cursor-pointer hover:text-gray-200">
                  <FaGithub />
                </li>
              </Link>
              <Link href="https://medium.com/@sickmi14798">
                <li className="hover:cursor-pointer hover:text-gray-200">
                  <FaMediumM />
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-4 flex justify-center gap-3 md:justify-start">
            <button className="rounded-lg bg-cyan-500 p-3 hover:bg-cyan-600 hover:text-white">
              Email me
            </button>
            <button className="rounded-lg p-3 ring-2 ring-black hover:text-blue-700 hover:ring-blue-500">
              Resume
            </button>
          </div>
        </div>
        <div className="hidden h-80 w-80 md:flex">
          <Image src={avatar} alt="me" className="h-80 w-80 rounded-full" />
        </div>
      </section>

      <section className="container mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl sm:text-3xl">Recent Projects</h3>
          <button className="rounded-lg p-2 ring-2 ring-black hover:text-blue-700 hover:ring-blue-500">
            View More
          </button>
        </div>
        <div className="my-10 mx-8 flex flex-col gap-10 md:flex-row">
          <div className="rounded-lg md:w-1/2">
            <Image
              className="h-full max-h-40 w-full object-cover hover:cursor-pointer lg:max-h-48 2xl:max-h-72"
              src={handmadeProject}
              alt="project-handmade"
            />
            <div className="-translate-y-2">
              <div className="flex items-center justify-evenly bg-gray-200 py-3">
                <p className="hover:cursor-pointer">Handmade 手作電商平台</p>
                <div className="flex gap-3 rounded-lg bg-cyan-500 p-3">
                  <Tooltip
                    title="React.js"
                    placement="top-start"
                    enterDelay={500}
                    leaveDelay={200}
                  >
                    <Button className="min-w-0 p-0 text-black">
                      <FaReact />
                    </Button>
                  </Tooltip>
                  <Tooltip
                    title="node.js"
                    placement="top-start"
                    enterDelay={500}
                    leaveDelay={200}
                  >
                    <Button className="min-w-0 p-0 text-black">
                      <FaNodeJs />
                    </Button>
                  </Tooltip>
                </div>
              </div>
              <div className="flex justify-evenly gap-3 rounded-b-lg bg-cyan-100 p-3">
                <p className="flex items-center gap-3">
                  <span>
                    <BiDetail />
                  </span>
                  Detail
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <BsEyeFill />
                  </span>
                  Live View
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg md:w-1/2 ">
            <Image
              className="h-full max-h-40 w-full object-cover hover:cursor-pointer lg:max-h-48 2xl:max-h-72"
              src={codingProject}
              alt="project-coding"
            />
            <div className="-translate-y-2">
              <div className="flex items-center justify-evenly  bg-gray-200 py-3">
                <p className="">程式家教網站</p>
                <div className="flex gap-3 rounded-lg bg-cyan-500 p-3">
                  <FaReact />
                  <FaNodeJs />
                </div>
              </div>
              <div className="flex justify-evenly gap-3 rounded-b-lg bg-cyan-100 p-3">
                <p className="flex items-center gap-3">
                  <span>
                    <BiDetail />
                  </span>
                  Detail
                </p>
                <p className="flex items-center gap-3">
                  <span>
                    <BsEyeFill />
                  </span>
                  Live View
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
