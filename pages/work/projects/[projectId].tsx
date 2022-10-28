import React from "react"
import { MongoClient } from "mongodb"
import { GetStaticProps } from "next"
import { Props } from "../../../typeScript"
// import { useRouter } from "next/router"

const project = ({ projects }: Props) => {
  // const router = useRouter()

  return <div>[projectId]</div>
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

// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   const users = await res.json()

//   const paths = users.map((user) => ({
//     params: { id: user.id.toString() },
//   }))

//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   }
// }

export default project
