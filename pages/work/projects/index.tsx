import React from "react"
import Head from "next/head"
import { MongoClient } from "mongodb"
import { GetStaticProps } from "next"
import { Props } from "../../../typeScript"
import ProductCard from "../../../components/ProductCard"

const Projects = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>Angus 個人網站 - Side Project | 作品集</title>
        <meta name="description" content="此頁面存放著所實做過的所有專案" />
        <meta
          name="keywords"
          content="Angus,Angushyx,黃奕翔,網頁開發工程師,前端工程師,網頁前端, 網頁設計,台中網頁設計,網站設計,網站架設,網頁製作,架設網站,網站設計公司,客製化網站,架站,客製網站,程式設計公司"
        />
        <link rel="icon" href="https://i.imgur.com/y7fKZP2.png" />
      </Head>
      <div className="container mt-10 mb-16">
        <h1 className=" text-3xl">Projects</h1>
      </div>
      <div className="column-2 mx-5 my-10 flex flex-wrap sm:mx-24 md:mx-32 md:flex-row lg:mx-40">
        {projects.map((project) => {
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
        techs: project.techs,
        githubUrl: project.githubUrl,
        webUrl: project.webUrl,
        isLightMode: project.isLightMode,
      })),
    },
  }
}

export default Projects
