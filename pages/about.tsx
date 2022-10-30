import React from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import Image from "next/image"
import avatar from "../public/avatar.png"
import Link from "next/link"
const about = () => {
  const ReactGitHubCalendar = dynamic(
    () => import("react-ts-github-calendar"),
    {
      ssr: false,
    }
  )

  return (
    <>
      <Head>
        <title>Angus work</title>
        <meta
          name="description"
          content="Hello my name is angus. I'm a Web developer. 哈囉大家好，我是黃奕翔，是一名網頁開發工程師。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <section className=" md:flex">
          <div className="my-7 mx-auto  flex  h-52 w-52  rounded-full  bg-gradient-to-bl from-blue-300 to-yellow-300 drop-shadow-xl md:flex md:h-80 md:w-80 lg:h-96 lg:w-96 ">
            <Image
              src={avatar}
              alt="me"
              className="z-20 h-52  w-52 rounded-3xl drop-shadow-xl md:h-80 md:w-80 lg:h-96 lg:w-96"
            />
          </div>
          <div className="px-5 text-center md:flex  md:flex-col md:items-start md:justify-center md:text-start">
            <h1 className=" text-3xl">黃奕翔( Angus )</h1>
            <h2 className="my-3 ">
              Full Stack Developer, technical writer, and a passionate learner.
            </h2>
            <h3 className="my-3  text-blue-500">Email me</h3>
            <div className="">
              <Link href="mailto:sickmi14798@gmail.com">
                <button className="rounded-lg bg-yellow-50 p-2 text-blue-700 ring-2 ring-blue-500">
                  sickmi14798@gmail.com
                </button>
              </Link>
            </div>
            <div className="my-5 flex-wrap justify-center md:flex md:justify-start">
              <Link href="/work">
                <button className="m-3 w-28 rounded-lg bg-yellow-50 p-1 text-blue-700 ring-2 ring-blue-500 md:w-24">
                  Work
                </button>
              </Link>
              <Link href="/blogs">
                <button className="m-3 w-28 rounded-lg bg-yellow-50 p-1 text-blue-700 ring-2 ring-blue-500 md:w-24">
                  Blogs
                </button>
              </Link>
              <Link href="/contact">
                <button className="m-3 w-28 rounded-lg bg-yellow-50 p-1 text-blue-700 ring-2 ring-blue-500 md:w-24">
                  Contact
                </button>
              </Link>
              <Link href="https://www.cakeresume.com/s--wHeWvC7hUtZmzal-32jraA--/angus-259cd2">
                <button className="m-3 w-28 rounded-lg bg-yellow-50 p-1 text-blue-700 ring-2 ring-blue-500 md:w-24">
                  Profiles
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="my-10 overflow-x-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-cyan-600 md:my-20">
          <ReactGitHubCalendar
            userName="angushyx"
            cache={12 * 60 * 60 * 1000}
          />
        </section>
      </div>
    </>
  )
}

export default about
