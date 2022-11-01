import React, { useState, useEffect } from "react"
import Head from "next/head"
import { GetStaticProps } from "next"
import axios from "axios"
import Link from "next/link"
import BlogCard from "../../components/BlogCard"
import { IBlogs } from "../../typeScript"

const Blogs = () => {
  const [blogs, setBlogs] = useState<IBlogs[]>([])

  const getBlogData = async () => {
    try {
      const response = await axios.get(
        `https://dev.to/api/articles?username=angushyx`
      )
      setBlogs(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getBlogData()
  }, [])

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

      <section>
        <h1></h1>
        <h2></h2>
        <Link href="/work/projects">
          <button className="e-in-out flex items-center gap-3 rounded-lg p-2 text-blue-700  ring-2 ring-blue-500 transition duration-150  ease-in-out hover:scale-105   hover:text-blue-400 hover:ring-blue-300"></button>
        </Link>
        <p></p>
        <div>
          <Link href="/work/projects">
            <button className="e-in-out flex items-center gap-3 rounded-lg p-2 text-blue-700  ring-2 ring-blue-500 transition duration-150  ease-in-out hover:scale-105   hover:text-blue-400 hover:ring-blue-300"></button>
          </Link>
          <Link href="/work/projects">
            <button className="e-in-out flex items-center gap-3 rounded-lg p-2 text-blue-700  ring-2 ring-blue-500 transition duration-150  ease-in-out hover:scale-105   hover:text-blue-400 hover:ring-blue-300"></button>
          </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
              return (
                <>
                  <BlogCard
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
