import React, { useState, useEffect } from "react"
import Head from "next/head"
import { GetStaticProps } from "next"
import axios from "axios"
import Link from "next/link"
import BlogCard from "../../components/BlogCard"
import { IBlogs } from "../../typeScript"
import { BsBoxArrowInUpRight } from "react-icons/Bs"
import { FaDev, FaMedium } from "react-icons/Fa"
import Image from "next/image"

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>([])

  const [currentBlogId, setCurrentBlogId] = useState<number>()

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
  useEffect(() => {
    getBlogData()
  }, [])
  const [currentBlog] = blogs.filter((currentBlog) => {
    return currentBlog.id === currentBlogId
  })
  if (!currentBlog) return

  console.log("currentBlog", currentBlog)

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

      <section className="-z-10 mb-20 mt-5">
        <div className="relative z-10 h-44 w-full md:h-36 lg:h-44 xl:h-80">
          <div className="absolute -z-30 h-full w-full">
            <Image
              src={currentBlog.social_image}
              alt={currentBlog.title}
              layout="fill"
              objectFit="contain"
              className="-z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl">{currentBlog.title}</h1>
            <h2 className="text-xl md:my-8 md:w-1/2">
              {currentBlog.description}
            </h2>
            <Link className="z-30" href={currentBlog.url}>
              <button className=" flex items-center items-center gap-3 rounded-lg bg-blue-700 p-2 text-white ring-2 ring-blue-500  transition duration-150 ease-in-out hover:scale-105  hover:cursor-pointer hover:ring-blue-300 active:scale-95">
                Read Blog
                <BsBoxArrowInUpRight />
              </button>
            </Link>
            <p className="my-3">Read this blog on your favourite platform:</p>

            <div className="flex gap-4">
              <Link href="/work/projects">
                <button className="text-2xl hover:cursor-pointer hover:text-gray-600">
                  <FaMedium />
                </button>
              </Link>
              <Link href="/work/projects">
                <button className="text-2xl hover:cursor-pointer hover:text-gray-600">
                  <FaDev />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
              return (
                <>
                  <BlogCard
                    currentBlogId={currentBlogId}
                    setCurrentBlogId={setCurrentBlogId}
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
