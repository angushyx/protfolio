import React, { useState, useEffect } from "react"
import Head from "next/head"
import { GetStaticProps } from "next"
import axios from "axios"
import BlogCard from "../../components/BlogCard"
import { IBlogs } from "../../typeScript"
import { BsBoxArrowInUpRight } from "react-icons/bs"
import { FaDev, FaMedium } from "react-icons/fa"
import Image from "next/image"
import { Skeleton } from "@mui/material"
import Modal from "../../components/UI/Modal"
import ModalContent from "../../components/UI/ModalContent"
import moment from "moment"
import { AiFillEye } from "react-icons/ai"
import { GoThumbsup } from "react-icons/go"
import { AiOutlineClockCircle } from "react-icons/ai"

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>([])
  const [currentBlogId, setCurrentBlogId] = useState<number>()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  //TODO:認真要改的話，這裡應該改成『當點擊到』modal-content裡面的退出按鈕
  const [showModal, setShowModal] = useState<boolean>(false)

  const getBlogData = async () => {
    try {
      const response = await axios.get(
        `https://dev.to/api/articles?username=angushyx`
      )
      setBlogs(response.data)
      setCurrentBlogId(response.data[0].id)
    } catch (err) {
      console.log(err)
    }
  }

  const [currentBlog] = blogs.filter((currentBlog) => {
    return currentBlog.id === currentBlogId
  })

  const ts30 = blogs.filter((blog) => {
    return blog.title.toLowerCase().includes("typescript 30")
  })
  const others = blogs.filter((blog) => {
    return !blog.title.toLowerCase().includes("typescript 30")
  })

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }
  const handleCurrentId = (id: number) => {
    setCurrentBlogId(id)
  }

  const handlePop = () => {
    setShowModal((prev: boolean) => !prev)
  }

  useEffect(() => {
    getBlogData()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!currentBlog) {
    return (
      <>
        <section className="-z-10 mb-20 mt-5 ">
          <div className="h-80">
            <Skeleton
              className="rounded-circle m-0 h-full w-full"
              animation="wave"
              height={320}
              variant="rectangular"
            />
          </div>
        </section>
        <section className="my-20">
          <div className="container">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Skeleton height={280} animation="wave" variant="rectangular" />
              <Skeleton height={280} animation="wave" variant="rectangular" />
              <Skeleton height={280} animation="wave" variant="rectangular" />
              <Skeleton height={280} animation="wave" variant="rectangular" />
              <Skeleton height={280} animation="wave" variant="rectangular" />
              <Skeleton height={280} animation="wave" variant="rectangular" />
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Angus 個人網站 - 部落格文章專區</title>
        <meta
          name="description"
          content="除了作品集之外，也會透過撰寫部落格內化學過之技術。"
        />
        <meta
          name="keywords"
          content="Angus,Angushyx,黃奕翔,網頁開發工程師,前端工程師,網頁前端, 網頁設計,台中網頁設計,網站設計,網站架設,網頁製作,架設網站,網站設計公司,客製化網站,架站,客製網站,程式設計公司"
        />

        <link rel="icon" href="https://i.imgur.com/y7fKZP2.png" />
      </Head>

      <section className="-z-10 mb-20 ">
        <div
          className={`${
            isScrolled ? "fixed top-0 z-50 w-full md:h-64" : "relative"
          } h-84 `}
        >
          <div className="absolute -z-20 h-full w-full  before:absolute before:top-0 before:left-0 before:z-20 before:h-full  before:w-full  before:bg-gradient-to-br before:from-black before:via-neutral-900 before:to-yellow-200 before:opacity-90 before:content-['']">
            <Image
              src={currentBlog.social_image}
              alt={currentBlog.title}
              layout="fill"
              objectFit="cover"
              className="-z-30  "
            />
          </div>
          <div className={`${isScrolled ? "p-4" : "p-8"} text-white`}>
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              {currentBlog.title}
            </h1>
            <h2
              className={`text-md my-3 sm:my-5 md:w-2/3 md:text-xl ${
                isScrolled ? "lg:my-3" : "lg:my-8"
              } xl:w-1/2`}
            >
              {currentBlog.description}
            </h2>
            <a
              target="_blank"
              className="z-30"
              href={currentBlog.url}
              rel="noreferrer"
            >
              <button className="flex items-center gap-3 rounded-lg bg-blue-700 p-2 text-white ring-2 ring-blue-500  transition duration-150 ease-in-out hover:scale-105  hover:cursor-pointer hover:ring-blue-300 active:scale-95">
                Read Blog
                <BsBoxArrowInUpRight />
              </button>
            </a>
            <p className="my-3">Read this blog on your favorite platform:</p>

            <div className="flex gap-4">
              <a
                target="_blank"
                href="https://medium.com/@sickmi14798"
                rel="noreferrer"
              >
                <button className="text-2xl hover:cursor-pointer hover:text-gray-600">
                  <FaMedium />
                </button>
              </a>
              <a target="_blank" href={currentBlog.url} rel="noreferrer">
                <button className="text-2xl hover:cursor-pointer hover:text-gray-600">
                  <FaDev />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={isScrolled ? "mb-20 mt-80" : "my-20"}>
        <div className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className={`relative`}>
              {showModal && (
                <Modal handlePop={handlePop} showModal={showModal}>
                  <div className="transform-3d my-28 mx-auto flex w-full px-3 md:p-0 md:px-0 lg:my-32 xl:my-48">
                    {ts30
                      .reverse()
                      .slice(0, 5)
                      .map((ts) => {
                        return (
                          <>
                            <ModalContent
                              key={ts.id}
                              handleCurrentId={() => {
                                handleCurrentId(ts.id)
                              }}
                              handlePop={handlePop}
                              index={ts30.indexOf(ts) + 1}
                              id={ts.id}
                              showModal={showModal}
                              url={ts.url}
                              social_image={ts.social_image}
                              title={ts.title}
                              created_at={ts.created_at}
                              description={ts.description}
                              public_reactions_count={ts.public_reactions_count}
                              reading_time_minutes={ts.reading_time_minutes}
                            />
                          </>
                        )
                      })}
                  </div>
                </Modal>
              )}

              {ts30.map((blog) => {
                const isDayOne = blog.title.includes("Day 1")
                return (
                  <>
                    <div
                      key={blog.id}
                      onClick={handlePop}
                      className={`${
                        isDayOne ? "relative -top-2 -left-2 z-20" : "absolute "
                      } active:scale-95" mb-10 flex w-full flex-1 cursor-pointer flex-col bg-white
          shadow-xl`}
                    >
                      <div className="xl:h-50 relative h-44 w-full md:h-36 lg:h-44 ">
                        <Image
                          src={blog.social_image}
                          alt={blog.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-3 ">
                        <p className="py-2">
                          {moment(blog.created_at).format("YYYY-MM-DD")}
                        </p>
                        <h4 className="mb-3 line-clamp-2">
                          {blog.description}
                        </h4>
                        <div className="border-t-2 border-gray-700">
                          <ul className="my-3 flex justify-between">
                            <li className="flex items-center justify-center gap-3">
                              <AiFillEye />
                              {blog.public_reactions_count}
                            </li>
                            <li className="flex items-center justify-center gap-3">
                              <GoThumbsup />
                              {blog.public_reactions_count}
                            </li>
                            <li className="flex items-center justify-center gap-3">
                              <AiOutlineClockCircle />
                              {blog.reading_time_minutes} min
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>

            {others.map((blog) => {
              return (
                <>
                  <BlogCard
                    handleCurrentId={() => {
                      handleCurrentId(blog.id)
                    }}
                    isList={false}
                    key={blog.id}
                    id={blog.id}
                    canonical_url={blog.canonical_url}
                    social_image={blog.social_image}
                    created_at={blog.created_at}
                    description={blog.description}
                    slug={blog.slug}
                    reading_time_minutes={blog.reading_time_minutes}
                    title={blog.title}
                    url={blog.url}
                    public_reactions_count={blog.public_reactions_count}
                  />
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const getBlogData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://dev.to/api/articles?username=angushyx`
  //     )

  //     return response.data
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // let blogs = getBlogData()

  return {
    props: {
      // blogs: blogs.map((blog) => ({console.log(blog)})),
    },
  }
}

export default Blogs
