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
//? true: 當 params = 3 不會回傳 404 而是回傳 fallback 頁面--> fallback 葉面是沙小(上一夜的意思嗎?)
// ? 當進入沒有定義 params的頁面時，可以搭配 const router = useRouter(); router.isFallback --> true 函式做 loading 效果
//? false: 當 params = 3 的時候 return 404 page --> 適合靜態網站
//? blocking: 與 true 一樣不回傳 404 而是執行 getStaticProps ， 不一樣的點：!!!1. 沒有 router.isFallback!!!  !!!2.讓頁面卡在 getStaticProps 的階段!!!
//?所以使用者體驗會非常像似 getServerSideProps ，但優點是下次使用者再次瀏覽同一個頁面時，伺服器可以直接回傳已經生成的 HTML 檔案，往後甚至可以藉由 CDN 的 cache 提升頁面的載入速度。
//     fallback: false,
//   }
// }

export default Project
