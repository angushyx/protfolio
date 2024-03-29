import React from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import Image from "next/image"
import avatar from "../public/avatar.png"
import { FaGithub, FaMedium } from "react-icons/fa"
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
        <title>Angus 個人網站 - 關於我</title>
        <meta
          name="description"
          content="哈囉大家好，我是黃奕翔，網頁學習經歷以及動機。"
        />
        <meta
          name="keywords"
          content="Angus,Angushyx,黃奕翔,網頁開發工程師,前端工程師,網頁前端, 網頁設計,台中網頁設計,網站設計,網站架設,網頁製作,架設網站,網站設計公司,客製化網站,架站,客製網站,程式設計公司"
        />

        <link rel="icon" href="https://i.imgur.com/y7fKZP2.png" />
      </Head>

      <div className="container">
        <section className=" border-b-2 pb-4 md:flex">
          <div className="my-7 mx-auto flex h-52  w-52 rounded-full  bg-gradient-to-bl  from-blue-300 to-yellow-300 drop-shadow-2xl md:flex md:h-80 md:w-80 lg:h-96 lg:w-96 ">
            <Image
              src={avatar}
              alt="me"
              className="z-20 h-52  w-52 rounded-3xl drop-shadow-2xl md:h-80 md:w-80 lg:h-96 lg:w-96"
            />
          </div>
          <div className="px-5 text-center md:mr-5  md:flex md:flex-col md:items-start md:justify-center md:text-start">
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
            <div className="my-5 flex-wrap justify-center  md:flex md:justify-start">
              <Link href="/work">
                <button className="m-3 w-28 rounded-lg bg-yellow-50 p-1 text-blue-700 ring-2 ring-blue-500 md:ml-0 md:w-24">
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
              <a
                target="_blank"
                href="https://www.cakeresume.com/s--wHeWvC7hUtZmzal-32jraA--/angus-259cd2"
                rel="noreferrer"
              >
                <button className="m-3 w-28 rounded-lg bg-yellow-50 p-1 text-blue-700 ring-2 ring-blue-500 md:w-24">
                  Profiles
                </button>
              </a>
            </div>
            <div className="justify-self-end">
              <h3 className="my-3">Follow me on</h3>
              <ul className="flex justify-center gap-4 text-3xl md:items-center">
                <a
                  target="_blank"
                  href="https://github.com/angushyx"
                  rel="noreferrer"
                >
                  <li className="hover:cursor-pointer hover:text-gray-600">
                    <FaGithub />
                  </li>
                </a>
                <a
                  target="_blank"
                  href="https://medium.com/@sickmi14798"
                  rel="noreferrer"
                >
                  <li className="hover:cursor-pointer hover:text-gray-600">
                    <FaMedium />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </section>
        <section className="my-10 py-5">
          <article className="">
            HI, 我是 Angus 是一名前端工程師
            <div className="leading-7">
              目前是一名全端工程師，畢業後第一份工作，在嘉碼科技當網頁工程師，主要工作內容是負責研發公司內部產品，其中包括網站、APP的前端、後端功能開發，現在公司要做的項目除了使用網頁技術外（Vue2
              ＋ Node.js），也會用到 React Native。
              喜歡研究各種不同的新技術，另外還有做一個 side project
              是關於股市回測功能，使用技術為 Next.js 14 和
              Python（backend），資料庫則是使用
              MongoDB，除了前後端的開發之外，目前也在專案中導入、並且練習使用
              Docker、Kubernetes 等容器化與容器管理平台。
            </div>
          </article>
        </section>
        <section className="my-12">
          <h3 className="text-3xl">OSS Contributions</h3>
          <div className="my-10 overflow-x-scroll rounded-3xl bg-black p-5 text-white scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-cyan-600 md:mb-20">
            <ReactGitHubCalendar
              userName="angushyx"
              cache={12 * 60 * 60 * 1000}
            />
          </div>
        </section>
      </div>
    </>
  )
}

//  起初接觸程式是在 ALPHA Camp 由於時間的因素，在今年的 6
//               月至資展國際培訓，在小組中的身分是技術長，培訓同時也擔任Alpha camp
//               的助教，目前的狀態是準備當兵，原預計在 2022/10/27 入伍
//               ，時運不齊，命途多舛，在前一天的 10/26 檢測出確診 covid-19
//               ，兵役延期至 12 月，因此目前在家自由接案、學習新技術和撰寫 blog
//               充實空窗期。
//               雖然喜歡帶著充足準備再執行任務，但也明白凡事都不會有真正準備好的一天，與其空想不如付出行動，也因為這個個性讓我嘗試過了各式各樣的打工，像是浮淺教練、餐廳內場廚房助手等等...
//               深深堅信唯有不斷跳離舒適圈，可以讓自己更無懼的面對未來的困難，並以樂觀的態度突破眼前的困境，因此願意帶上勇氣，竭盡當下全力後，付出行動。

export default about
