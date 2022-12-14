import React, { useEffect, useState } from "react"
import { MongoClient } from "mongodb"
import { GetStaticPaths, GetStaticProps } from "next"
import { Props } from "../../../typeScript"
import { useRouter } from "next/router"
import Markdown from "markdown-to-jsx"
import axios from "axios"

const Project = ({ projects }: Props) => {
  const [readme, setReadme] = useState<string>("")
  const router = useRouter()

  const [project] = projects.filter((p) => {
    return p.id === router.query.projectId
  })

  const getProjectData = async () => {
    try {
      const response = await axios.get(
        `https://raw.githubusercontent.com/angushyx/${project.repName}/main/README.md`
      )
      setReadme(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProjectData()
  }, [])

  return (
    <div className="container">
      <h1 className="mb-16 mt-10 text-4xl ">Project Detail</h1>
      <section className="container mt-10 mb-20">
        <Markdown>{readme}</Markdown>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const url: string = process.env.MONGODB_URI ?? "whatever default"

  const client = await MongoClient.connect(url)
  const db = client.db()

  const projectCollection = db.collection("projectCard")

  const projects = await projectCollection.find().toArray()

  client.close()

  return {
    props: {
      projects: projects.map((project) => ({
        name: project.name,
        imgUrl: project.imgUrl,
        id: project._id.toString(),
        techs: project.techs,
        githubUrl: project.githubUrl,
        webUrl: project.webUrl,
        isLightMode: project.isLightMode,
        repName: project.repName,
      })),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { projectId: "1" } }],
    fallback: "blocking",
  }
}

// export const getStaticPaths: GetStaticPaths = () => {
//   return {
//     paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//? true: ??? params = 3 ???????????? 404 ???????????? fallback ??????--> fallback ???????????????(??????????????????????)
// ? ????????????????????? params??????????????????????????? const router = useRouter(); router.isFallback --> true ????????? loading ??????
//? false: ??? params = 3 ????????? return 404 page --> ??????????????????
//? blocking: ??? true ??????????????? 404 ???????????? getStaticProps ??? ??????????????????!!!1. ?????? router.isFallback!!!  !!!2.??????????????? getStaticProps ?????????!!!
//????????????????????????????????????? getServerSideProps ????????????????????????????????????????????????????????????????????????????????????????????????????????? HTML ????????????????????????????????? CDN ??? cache ??????????????????????????????
//     fallback: false,
//   }
// }

export default Project
