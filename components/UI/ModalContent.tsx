import React from "react"
import { IBlogsList } from "../../typeScript"
import moment from "moment"
import Image from "next/image"
import { AiFillEye, AiOutlineClockCircle } from "react-icons/ai"
import { GoThumbsup } from "react-icons/go"
import { motion as m } from "framer-motion"

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
  function template({ skew, translateX, translateY, scaleY, scaleX }: any) {
    return `skew(${skew}) translateX(${translateX}) translateY(${translateY}) scaleY(${scaleY}) scaleX(${scaleX})`
  }

  return (
    <>
      {/* 一 */}
      <m.div
        key={id}
        transformTemplate={template}
        // initial={
        //   showModal
        //     ? {
        //         opacity: 0,
        //         x: "50%",
        //         y: "50%",
        //       }
        //     : {}
        // }
        animate={{ skew: "-12deg", translateX: "40px", translateY: "96px" }}
        style={{ skew: 0, translateX: 0, translateY: 0 }}
        // animate={showModal ? { opacity: 1, x: "0%", y: "0%" } : {}}
        // transition={showModal ? { duration: 1, ease: "easeInOut" } : {}}
        onClick={handleCurrentId}
        // className={`z-9999  my-28 mx-auto w-72 translate-x-10
        // translate-y-24 -skew-y-12 scale-x-75 scale-y-90 bg-white shadow-xl`}
        className={`z-9999  my-28 mx-auto w-72 bg-white shadow-xl`}
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
      </m.div>
      {/* 二 */}
      <div
        key={id}
        onClick={handleCurrentId}
        className={`z-9999 my-28 mx-auto  w-72 translate-y-8 -skew-y-8 scale-x-90 scale-y-95 bg-white shadow-xl`}
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
      {/* 三 */}
      <div
        key={id}
        onClick={handleCurrentId}
        className={`z-9999 my-28 mx-auto w-72 bg-white shadow-xl`}
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
        className={`z-9999 my-28 mx-auto w-72 translate-y-8 skew-y-8 scale-x-90  scale-y-95 bg-white shadow-xl`}
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
        className={`z-9999 my-28 mx-auto w-72 -translate-x-10 translate-y-24 skew-y-12 scale-y-90 scale-x-75 bg-white shadow-xl`}
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
