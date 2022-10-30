/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next"
import Head from "next/head"
import { FaGithub, FaMediumM } from "react-icons/fa"
import { BsLink45Deg } from "react-icons/bs"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import avatar from "../public/avatar.png"
import ProductCard from "../components/ProductCard"
import TechFall from "../components/TechFall"
import { MongoClient } from "mongodb"
import { GetStaticProps } from "next"
import { Props, Techs } from "../typeScript"

const Home: NextPage<Props> = ({ techs, projects }: Props) => {
  const sliceProjects = projects.slice(0, 2)

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
              <Link href="mailto:sickmi14798@gmail.com">
                <button className="rounded-lg bg-cyan-300 p-3 hover:text-white ">
                  Email me
                </button>
              </Link>
              <Link href="https://www.cakeresume.com/s--wHeWvC7hUtZmzal-32jraA--/angus-259cd2">
                <button className="rounded-lg p-3 ring-2 ring-gray-800 hover:text-blue-700 hover:ring-blue-500">
                  Resume
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden h-80 w-80 drop-shadow-xl md:flex">
            <Image src={avatar} alt="me" className="h-80 w-80 drop-shadow-xl" />
          </div>
        </section>

        <section className=" container mt-16">
          <div className="flex items-center justify-between">
            <h3 className="subTitle-text">Recent Projects</h3>

            <button className="rounded-lg p-2 ring-2 ring-black hover:text-blue-700 hover:ring-blue-500">
              <Link href="/work/projects">View More</Link>
            </button>
          </div>
          <div className="column-2 mt-10 flex flex-wrap md:flex-row">
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
        </section>

        <section className="container mt-20 mb-12">
          <h3 className="subTitle-text text-center md:text-start">
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

        <section className="my-20 ">
          <div className="container items-center justify-around rounded-md bg-black p-10 md:flex ">
            <h3 className="subTitle-text mb-10 text-center text-yellow-100  md:mb-0 md:w-40 md:flex-initial md:text-start">
              Interested working with me?
            </h3>
            <div className="flex flex-col gap-5 md:flex-row">
              <Link href="mailto:sickmi14798@gmail.com">
                <button className="rounded-lg bg-yellow-50 p-2 text-blue-700 ring-2 ring-blue-500">
                  Email me
                </button>
              </Link>
              <Link href="/work/projects">
                <button className="rounded-lg p-2 text-blue-700 ring-2 ring-blue-500">
                  See more Projects
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
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

export default Home
