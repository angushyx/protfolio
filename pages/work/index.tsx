import React, { useState, useEffect } from "react"
import Head from "next/head"
import ProductCard from "../../components/ProductCard"
import { MongoClient } from "mongodb"
import { GetStaticProps } from "next"
import { Props } from "../../typeScript"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import BlogCard from "../../components/BlogCard"
import { IBlogs } from "../../typeScript"
import axios from "axios"

const Work = ({ projects }: Props) => {
  const sliceProjects = projects.slice(0, 2)
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

  if (!blogs) return

  return (
    <>
      <Head>
        <title>Angus 個人網站 - 工作相關 | 個人作品集 | 部落格文章</title>
        <meta
          name="description"
          content="工作內容有架設網站、網頁開發以及撰寫部落格文章。"
        />
        <meta
          name="keywords"
          content="Angus,Angushyx,黃奕翔,網頁開發工程師,前端工程師,網頁前端, 網頁設計,台中網頁設計,網站設計,網站架設,網頁製作,架設網站,網站設計公司,客製化網站,架站,客製網站,程式設計公司"
        />

        <link rel="icon" href="https://i.imgur.com/y7fKZP2.png" />
      </Head>
      <div className="container mt-10 flex items-center justify-between">
        <h1 className="my-6 text-3xl">Projects</h1>
        <div className="">
          <Link href="/work/projects">
            <button className="e-in-out flex items-center gap-3 rounded-lg p-2 text-blue-700  ring-2 ring-blue-500 transition duration-150  ease-in-out hover:scale-105   hover:text-blue-400 hover:ring-blue-300">
              <span>View more</span>
              <div>
                <FaArrowRight />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div
        key="work"
        className="column-2 my-3 flex flex-wrap sm:mx-24 md:mx-32 md:flex-row lg:mx-44"
      >
        {sliceProjects.map((project) => {
          return (
            <ProductCard
              key={project.id}
              name={project.name}
              imgUrl={project.imgUrl}
              id={project.id}
              techs={project.techs}
              githubUrl={project.githubUrl}
              webUrl={project.webUrl}
              isLightMode={project.isLightMode}
            />
          )
        })}
      </div>

      <section className="my-10 md:my-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className=" my-6 text-3xl">Blogs</h1>
            <div className="">
              <Link href="/blogs">
                <button className="e-in-out flex items-center gap-3 rounded-lg p-2 text-blue-700  ring-2 ring-blue-500 transition duration-150  ease-in-out hover:scale-105   hover:text-blue-400 hover:ring-blue-300">
                  <span>View more</span>
                  <div>
                    <FaArrowRight />
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((blog) => {
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
  const url: string = process.env.MONGODB_URI ?? "whatever default"

  const client = await MongoClient.connect(url)
  const db = client.db()
  const techCollection = db.collection("tech")
  const projectCollection = db.collection("projectCard")

  const techs = await techCollection.find().toArray()
  const projects = await projectCollection.find().toArray()

  projects.sort((a, b) => {
    const dateA = new Date(a.createDate).getTime()
    const dateB = new Date(b.createDate).getTime()
    return dateB - dateA
  })

  client.close()

  return {
    props: {
      techs: techs.map((tech) => ({
        name: tech.name,
        imgUrl: tech.imgUrl,
        id: tech._id.toString(),
      })),
      projects: projects.map((project) => ({
        name: project.name,
        imgUrl: project.imgUrl,
        id: project._id.toString(),
        // TODO:太鹹的畫把 MONGODB裡的techId改成_id
        // techs: project.techs.map((projectTech) => ({
        //   id: projectTech._id.toString(),
        // })),
        techs: project.techs,
        githubUrl: project.githubUrl,
        webUrl: project.webUrl,
        isLightMode: project.isLightMode,
      })),
    },
  }
}

export default Work
