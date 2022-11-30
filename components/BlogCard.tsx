import React from "react"
import Image from "next/image"
import { IBlogsList } from "../typeScript"
import moment from "moment"
import { AiFillEye } from "react-icons/ai"
import { GoThumbsup } from "react-icons/go"
import { AiOutlineClockCircle } from "react-icons/ai"
// import { gsap } from "gsap"

const BlogCard = ({
  id,
  canonical_url,
  social_image,
  created_at,
  description,
  slug,
  reading_time_minutes,
  title,
  url,
  public_reactions_count,
  handleCurrentId,
}: IBlogsList) => {
  return (
    <>
      <div
        onClick={handleCurrentId}
        className="mb-10 flex w-full cursor-pointer flex-col  bg-white shadow-xl active:scale-95"
      >
        <div className="xl:h-50 relative h-44 w-full md:h-36 lg:h-44 ">
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
            <ul className="my-3 flex justify-between">
              <li className="flex items-center justify-center gap-3">
                <AiFillEye />
                {public_reactions_count}
              </li>
              <li className="flex items-center justify-center gap-3">
                <GoThumbsup />
                {public_reactions_count}
              </li>
              <li className="flex items-center justify-center gap-3">
                <AiOutlineClockCircle />
                {reading_time_minutes} min
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard
