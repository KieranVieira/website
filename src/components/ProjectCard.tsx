import Image, { StaticImageData } from "next/image";

import { icons } from '../assets';

interface Props {
  projectImage: string | StaticImageData,
  title: string,
  link: string,
}

export const ProjectCard: React.FC<Props> = ({ projectImage, title, link }) => {
  return (
    <a href={link} className="flex flex-col justify-between bg-lightBlue dark:bg-paleBlue rounded-xl w-full shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all text-white" target='_blank'>
      <div className="flex flex-grow align-center justify-center my-2">
        <Image src={projectImage} draggable={false} objectFit='contain'/>
      </div>
      <div className="bg-blue px-7 py-5 rounded-b-xl">
        <div className="flex flex-row items-center justify-between">
          <h3>{title}</h3>
          <Image src={icons.arrow} draggable={false} />
        </div>
        <h6 className="mt-1">Project</h6>
      </div>
    </a>
  )
}
