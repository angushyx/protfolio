/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next"
import Head from "next/head"
import { FaGithub, FaMediumM } from "react-icons/fa"
import { BsLink45Deg } from "react-icons/bs"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import avatar from "../public/avatar.jpg"
import ProductCard from "../components/ProductCard"
import TechFall from "../components/TechFall"
import { MongoClient } from "mongodb"
import { GetStaticProps } from "next"
import { Props, Techs } from "../typeScript"

const Home: NextPage<Props> = ({ techs, projects }: Props) => {
  // let info = {
  //   name: "angus",
  //   age: 20,
  //   haspET: true,
  // }

  // info = {
  //   name: "david",
  //   age: 24,
  //   haspET: false,
  // }
  // info = {
  //   name: "david",
  //   age: 24,
  //   haspET: true,
  //   dog: "cc",
  // }
  // info.job = "coding"

  // console.log(info)

  // let justObj: object = { name: "angus" }

  // justObj.name = "david"

  // justObj.name = null

  // justObj = { title: "bod" }

  // justObj.test = { foo: "foo" }

  // justObj = ["12", 3, "425", { foo: "foo" }, false]

  // justObj = () => {
  //   console.log("歐給")
  // }

  // justObj = new Object()

  // justObj = new String("123123")

  // justObj = new Number(12312)

  // justObj = Object
  // justObj = Array

  // let doesItWork1 = function doesItWork1() {
  //   return undefined
  // }
  // let doesItWork2 = function doesItWork2(): undefined {
  //   return undefined
  // }

  // let doesItWork3 = function doesItWork3(): undefined {}
  // let doesItWork4 = function doesItWork4(): void {
  //   return undefined
  // }

  // doesItWork1()
  // doesItWork2()
  // doesItWork3()
  // doesItWork4()

  // let objArray1 = [
  //   {
  //     message: "hello",
  //   },
  //   {
  //     message: "hi",
  //   },
  //   {
  //     message: "hola",
  //   },
  // ]

  // let objArray2 = [
  //   {
  //     message: "hello",
  //   },
  //   {
  //     message: "hi",
  //     revolt: true,
  //   },
  //   {
  //     message: "hola",
  //   },
  // ]
  // let objArray3 = [
  //   {
  //     message: "hello",
  //   },
  //   {
  //     message: 12323,
  //   },
  //   {
  //     message: "hola",
  //   },
  // ]

  // let x = [
  //   [1, 2, 3],
  //   ["jie", "wqe"],
  //   [true, false, 123, null],
  //   ["string", undefined],
  // ]
  // console.log(x)

  return (
    <>
      <Head>
        <title>Angus Portfolio</title>
        <meta
          name="description"
          content="Hello my name is angus. I'm a Web developer. 哈囉大家好，我是黃奕翔，是一名網頁開發工程師。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <section className=" mr-30 flex justify-center py-4 md:justify-between lg:px-20">
          <div className="text-center md:text-start">
            <div className="mb-2 flex flex-col  text-2xl">
              Hey!
              <div className="mt-2 text-4xl">
                I'm <span>Angus</span>
              </div>
            </div>
            <div className="text-gray-600 ">
              I have a passion for technology.
            </div>
            <TypeAnimation
              sequence={[
                "web developer",
                1000,
                "technical writer",
                2000,
                "oss contributor",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", color: "#0e7490" }}
            />
            <Link href="/about">
              <div className="flex items-center justify-center text-black md:justify-start">
                Know More <BsLink45Deg />
                <span className="text-gray-600">about me</span>
              </div>
            </Link>
            <div className="mt-3 flex items-center justify-center gap-3 text-lg md:justify-start">
              Follow me
              <ul className="flex justify-center gap-2 ">
                <Link href="https://github.com/angushyx">
                  <li className="hover:cursor-pointer hover:text-gray-600">
                    <FaGithub />
                  </li>
                </Link>
                <Link href="https://medium.com/@sickmi14798">
                  <li className="hover:cursor-pointer hover:text-gray-600">
                    <FaMediumM />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="mt-4 flex justify-center gap-3 md:justify-start">
              <button className="rounded-lg bg-cyan-300 p-3 hover:text-white ">
                Email me
              </button>
              <button className="rounded-lg p-3 ring-2 ring-gray-800 hover:text-blue-700 hover:ring-blue-500">
                Resume
              </button>
            </div>
          </div>
          <div className="hidden h-80 w-80 rounded-full drop-shadow-xl md:flex">
            <Image
              src={avatar}
              alt="me"
              className="h-80 w-80 rounded-full drop-shadow-xl"
            />
          </div>
        </section>

        <section className="container mt-16">
          <div className="flex items-center justify-between">
            <h3 className="subTitle-text">Recent Projects</h3>

            <button className="rounded-lg p-2 ring-2 ring-black hover:text-blue-700 hover:ring-blue-500">
              <Link href="/work">View More</Link>
            </button>
          </div>
          <div className="my-12 flex flex-col gap-10 md:flex-row">
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
        </section>

        <section className="container mt-8 mb-12">
          <h3 className="subTitle-text text-center text-cyan-600 md:text-start">
            Tools, Languages & Frameworks/Libraries
          </h3>
          <div className="mt-12 grid max-h-40 grid-cols-3 justify-items-center gap-3 overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-cyan-600 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {techs.map((tech: Techs) => {
              return (
                <TechFall
                  id={tech.id}
                  key={tech.id}
                  imgUrl={tech.imgUrl}
                  name={tech.name}
                />
              )
            })}
          </div>
        </section>

        <section className="mt-8">
          <h3 className="subTitle-text">Interested working with me?</h3>
          <div>
            <button>Email me</button>
            <button>See more Projects</button>
          </div>
        </section>
      </main>
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

export default Home
