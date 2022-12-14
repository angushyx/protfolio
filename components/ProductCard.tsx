import React from "react"
import { BsEyeFill } from "react-icons/bs"
import { BiDetail } from "react-icons/bi"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"
import Image from "next/image"
import { Projects } from "../typeScript"

const ProductCard = ({
  name,
  imgUrl,
  techs,
  githubUrl,
  webUrl,
  isLightMode,
  id,
}: Projects) => {
  return (
    <>
      <div className="w-full rounded-lg p-3 md:w-6/12">
        <a
          target="_blank"
          href={webUrl !== "" ? webUrl : githubUrl}
          rel="noreferrer"
        >
          <div className="relative h-56 w-full cursor-pointer md:h-36 lg:h-44 xl:h-64 ">
            <Image
              src={imgUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </a>
        <div className="-translate-y-2">
          <div
            className={`flex items-center justify-evenly gap-2  p-2 ${
              isLightMode ? "bg-gray-200" : "bg-[#091523] text-white"
            }`}
          >
            <p className="truncate hover:cursor-pointer ">{name}</p>
            <div className="flex gap-3 rounded-lg  p-2 ">
              {techs.map((tech) => {
                return (
                  <Tooltip
                    key={tech.techId}
                    title={tech.name}
                    placement="top-start"
                    enterDelay={500}
                    leaveDelay={200}
                  >
                    <Button className="min-w-0 p-0 text-black">
                      <div className="h-5 w-5 md:h-6 md:w-6">
                        <Image
                          alt={tech.name}
                          width="100%"
                          height="100%"
                          src={tech.imgUrl}
                        />
                      </div>
                    </Button>
                  </Tooltip>
                )
              })}
            </div>
          </div>
          <div className="flex justify-evenly gap-3 rounded-b-lg bg-[#586a7e] p-3 text-white">
            <a target="_blank" href={`/work/projects/${id}`} rel="noreferrer">
              <p className="flex items-center gap-3  hover:cursor-pointer hover:text-sky-300 ">
                <span>
                  <BiDetail />
                </span>
                Detail
              </p>
            </a>
            <a
              target="_blank"
              href={webUrl !== "" ? webUrl : githubUrl}
              rel="noreferrer"
            >
              <p className="flex items-center gap-3  hover:cursor-pointer hover:text-sky-300 ">
                <span>
                  <BsEyeFill />
                </span>
                Live View
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
