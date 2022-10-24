import Image from "next/image"

const TechFall = ({ techs }) => {
  return (
    <>
      {techs.map((tech) => {
        return (
          <div
            key={tech.id}
            className="flex h-20  w-20 items-center justify-center rounded-lg bg-white p-3 sm:h-20 sm:w-20"
          >
            <Image
              src={tech.imgUrl}
              alt={tech.name}
              className="h-20 w-20 rounded-lg "
              width="60"
              height="60"
            />
          </div>
        )
      })}
    </>
  )
}

export default TechFall
