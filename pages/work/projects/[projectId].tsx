import React from "react"
// import { MongoClient } from "mongodb"
// import { GetStaticPaths, GetStaticProps } from "next"
// import { Props } from "../../../typeScript"
// { projects }: Props
const project = () => {
  // const router = useRouter()

  return <div>[projectId]</div>
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // const product = getProductById(params?.id as string)
//   const url: string = process.env.MONGODB_URI ?? "whatever default"

//   const client = await MongoClient.connect(url)
//   const db = client.db()
//   const techCollection = db.collection("tech")
//   const projectCollection = db.collection("projectCard")

//   const techs = await techCollection.find().toArray()
//   const projects = await projectCollection.find().toArray()

//   client.close()

//   return {
//     props: {
//       techs: techs.map((tech) => ({
//         name: tech.name,
//         imgUrl: tech.imgUrl,
//         id: tech._id.toString(),
//       })),
//       projects: projects.map((project) => ({
//         name: project.name,
//         imgUrl: project.imgUrl,
//         id: project._id.toString(),
//         techs: project.techs,
//         githubUrl: project.githubUrl,
//         webUrl: project.webUrl,
//         isLightMode: project.isLightMode,
//       })),
//     },
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [{ params: { id: "1" } }],
//     fallback: true,
//   }
// }

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

export default project
