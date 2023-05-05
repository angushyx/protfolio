import React from "react"
import { IBlogsList } from "../../typeScript"
import moment from "moment"
import Image from "next/image"
import {
  AiFillEye,
  AiOutlineClockCircle,
  AiOutlineLink,
  // AiOutlineCloseCircle,
} from "react-icons/ai"
import { GoThumbsup } from "react-icons/go"
// import { motion as m } from "framer-motion"

const ModalContent = ({
  id,
  handleCurrentId,
  social_image,
  title,
  url,
  created_at,
  description,
  public_reactions_count,
  index,
  reading_time_minutes,
}: IBlogsList) => {
  let carousel: string = ""

  switch (index) {
    case 1:
      carousel = `z-9997 hidden lg:block md:w-64 lg:w-72 translate-x-52 translate-y-20 -skew-y-12 scale-x-75 scale-y-90 opacity-40`
      break
    case 2:
      carousel = `z-9998 w-32 md:w-64 lg:w-72  translate-y-4 md:translate-x-16 md:translate-y-7 -skew-y-8 md:scale-x-90 md:scale-y-95  opacity-80`
      break
    case 3:
      carousel = `z-9999 md:w-72 lg:w-96 lg:-translate-y-1`
      break
    case 4:
      carousel = `z-9998 w-32 md:w-64 lg:w-72 translate-y-4 md:translate-y-7 md:-translate-x-16 skew-y-8  md:scale-x-90  md:scale-y-95  opacity-80`
      break
    case 5:
      carousel = `z-9997 hidden lg:block md:w-64 lg:w-72 -translate-x-52  translate-y-20 skew-y-12 scale-y-90 scale-x-75  opacity-40`
      break

    default:
      break
  }

  return (
    <>
      {/* <button className="absolute right-[20%]">
        <AiOutlineCloseCircle className="text-3xl text-red-400 " />
      </button> */}
      <div
        onClick={handleCurrentId}
        className={`${carousel} mx-auto bg-white shadow-xl`}
      >
        <div className="xl:h-50 relative h-44 w-full md:h-36 lg:h-44">
          <Image
            src={social_image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-3 ">
          <p className="py-2">{moment(created_at).format("YYYY-MM-DD ")}</p>
          <h4 className="mb-3 line-clamp-2">{description}</h4>
          <div className="border-t-2 border-gray-700">
            <ul className="my-3 flex justify-start gap-5">
              <li className="flex items-center justify-center gap-1">
                <AiFillEye />
                {public_reactions_count}
              </li>
              <li className="flex items-center justify-center gap-1">
                <GoThumbsup />
                {public_reactions_count}
              </li>
              <li className="flex items-center justify-center gap-1">
                <AiOutlineClockCircle />
                {reading_time_minutes} min
              </li>
              <li className=" ml-auto flex items-center gap-1">
                <a href={url} target="_blank" rel="noreferrer">
                  <AiOutlineLink className="text-2xl hover:text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalContent
