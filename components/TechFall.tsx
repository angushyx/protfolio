import Image from "next/image"
import { Techs } from "../typeScript"

const TechFall = ({ imgUrl, name }: Techs) => {
  return (
    <>
      <div className="flex h-20  w-20 items-center justify-center rounded-lg bg-white p-3 sm:h-20 sm:w-20">
        <Image
          src={imgUrl}
          alt={name}
          className="h-20 w-20 rounded-lg "
          width="60"
          height="60"
        />
      </div>
    </>
  )
}

export default TechFall
