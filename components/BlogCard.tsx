import React from "react"
import Image from "next/image"
import { IBlogsList } from "../typeScript"
import moment from "moment"
import { AiFillEye } from "react-icons/ai"
import { GoThumbsup } from "react-icons/go"
import { AiOutlineClockCircle } from "react-icons/ai"
// import { gsap } from "gsap"
import Modal from "./UI/Modal"
import ModalContent from "../components/UI/ModalContent"

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
  isList,
  showModal,
  handlePop,
}: IBlogsList) => {
  if (isList) {
    const isDayOne = title.includes("Day 1")
    console.log(title)
    return (
      <>
        {/* TODO:這裡用不到 url */}
        {showModal && (
          <Modal handlePop={handlePop}>
            <div className="transform-3d my-32 mx-auto flex w-11/12">
              <ModalContent
                id={id}
                url={url}
                handleCurrentId={handleCurrentId}
                social_image={social_image}
                title={title}
                created_at={created_at}
                description={description}
                public_reactions_count={public_reactions_count}
                reading_time_minutes={reading_time_minutes}
              />
            </div>
          </Modal>
        )}

        <div
          onClick={handlePop}
          className={`${
            isDayOne && "absolute -top-2 -left-2"
          } active:scale-95" mb-10 flex w-full flex-1 cursor-pointer flex-col bg-white
          shadow-xl`}
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
