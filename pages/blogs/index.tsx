import React, { useState, useEffect } from "react"
import Head from "next/head"
import { GetStaticProps } from "next"
import axios from "axios"
import Link from "next/link"
import BlogCard from "../../components/BlogCard"
import { IBlogs } from "../../typeScript"
import { BsBoxArrowInUpRight } from "react-icons/bs"
import { FaDev, FaMedium } from "react-icons/fa"
import Image from "next/image"
import { Skeleton } from "@mui/material"

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>([])
  //todo:改道陣列裡
  const [newBlogs, setNewBlogs] = useState<IBlogs[]>([])

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

  //1. 如果部落格 title名子包含 typeScript30 的話，把這幾個{}推入陣列翁
  let ts30: any = []
  let others: IBlogs[] = []
  let newData: IBlogs[] = []
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].title.toLowerCase().includes("typescript 30")) {
      ts30.push(blogs[i])
    } else {
      others.push(blogs[i])
    }
    newData = [ts30, ...others]
  }
  useEffect(() => {
    setNewBlogs(newData)
  }, [])

  const handleCurrentId = (id: number) => {
    setCurrentBlogId(id)
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    })
    console.log(id)
  }

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
              <Skeleton height={280} animation="wave" variant="rectangular" />{" "}
              <Skeleton height={280} animation="wave" variant="rectangular" />{" "}
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
        <title>Angus work</title>
        <meta
          name="description"
          content="Hello my name is angus. I'm a Web developer. 哈囉大家好，我是黃奕翔，是一名網頁開發工程師。"
        />
        <link rel="icon" href="https://i.imgur.com/y7fKZP2.png" />
      </Head>

      <section className="-z-10 mb-20 mt-5 ">
        <div className="relative h-80">
          <div className="absolute -z-20 h-full w-full  before:absolute before:top-0 before:left-0 before:z-20 before:h-full  before:w-full  before:bg-gradient-to-br before:from-black before:via-neutral-900 before:to-yellow-200 before:opacity-90 before:content-['']">
            <Image
              src={currentBlog.social_image}
              alt={currentBlog.title}
              layout="fill"
              objectFit="cover"
              className="-z-30  "
            />
          </div>
          <div className="p-8 text-white">
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              {currentBlog.title}
            </h1>
            <h2 className="text-md my-3 sm:my-5 md:w-2/3 md:text-xl lg:my-8 xl:w-1/2">
              {currentBlog.description}
            </h2>
            <Link className="z-30" href={currentBlog.url}>
              <button className="flex items-center gap-3 rounded-lg bg-blue-700 p-2 text-white ring-2 ring-blue-500  transition duration-150 ease-in-out hover:scale-105  hover:cursor-pointer hover:ring-blue-300 active:scale-95">
                Read Blog
                <BsBoxArrowInUpRight />
              </button>
            </Link>
            <p className="my-3">Read this blog on your favourite platform:</p>

            <div className="flex gap-4">
              <Link href="https://medium.com/@sickmi14798">
                <button className="text-2xl hover:cursor-pointer hover:text-gray-600">
                  <FaMedium />
                </button>
              </Link>
              <Link href={currentBlog.url}>
                <button className="text-2xl hover:cursor-pointer hover:text-gray-600">
                  <FaDev />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {newBlogs.map((blog) => {
              if (Array.isArray(blog) === true) {
                blog.map((v) => {
                  return <div key={v.id}>{v.title}</div>
                })
              } else {
                return (
                  <>
                    <BlogCard
                      handleCurrentId={() => {
                        handleCurrentId(blog.id)
                      }}
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
              }
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
