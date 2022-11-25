import React from "react"
import { IBlogsList } from "../../typeScript"
import moment from "moment"
import Image from "next/image"
import { AiFillEye, AiOutlineClockCircle } from "react-icons/ai"
import { GoThumbsup } from "react-icons/go"
// import { motion as m } from "framer-motion"

//TODO：這裡其實用不到 url
const ModalContent = ({
  id,
  handleCurrentId,
  social_image,
  title,
  url,
  created_at,
  description,
  public_reactions_count,
  showModal,
  reading_time_minutes,
}: IBlogsList) => {
  //todo:把它處理掉
  // function template({ skew, translateX, translateY, scaleY, scaleX }: any) {
  //   return `skew(${skew}) translateX(${translateX}) translateY(${translateY}) scaleY(${scaleY}) scaleX(${scaleX})`
  // }

  return (
    <>
      {/* 一 */}
      <div
        key={id}
        onClick={handleCurrentId}
        className="carousel-1 mx-auto bg-white shadow-xl"
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
      {/* 二 */}
      <div
        key={id}
        onClick={handleCurrentId}
        className="carousel-2 mx-auto bg-white shadow-xl"
      >
        <div className="xl:h-50 relative h-44 w-full md:h-36 lg:h-44">
          <Image
            src={social_image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-3">
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
      {/* 三 */}
      <div
        key={id}
        onClick={handleCurrentId}
        className="carousel-3 mx-auto bg-white shadow-xl"
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
      {/* 四 */}
      <div
        key={id}
        onClick={handleCurrentId}
        className="carousel-4 mx-auto bg-white shadow-xl"
      >
        <div className="xl:h-50 relative h-44 w-full  md:h-36 lg:h-44">
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
              <li className="flex  items-center justify-center gap-3">
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
      {/* 五 */}
      <div
        key={id}
        onClick={handleCurrentId}
        className="carousel-5 mx-auto bg-white shadow-xl"
      >
        <div className="xl:h-50 relative h-44 w-full  md:h-36 lg:h-44">
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

export default ModalContent
