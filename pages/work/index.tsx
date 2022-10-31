import React from "react"
import Head from "next/head"
import ProductCard from "../../components/ProductCard"
import { MongoClient } from "mongodb"
import { GetStaticProps } from "next"
import { Props } from "../../typeScript"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const work = ({ projects }: Props) => {
  const sliceProjects = projects.slice(0, 2)

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
          console.log(project.id)

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

      <div className="container mt-10">
        <h1 className=" my-6 text-3xl">Blogs</h1>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  //TODO:引用 typescript檔案來定義
  const url: string = process.env.MONGODB_URI ?? "whatever default"

  const client = await MongoClient.connect(url)
  const db = client.db()
  const techCollection = db.collection("tech")
  const projectCollection = db.collection("projectCard")

  const techs = await techCollection.find().toArray()
  const projects = await projectCollection.find().toArray()

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

export default work
