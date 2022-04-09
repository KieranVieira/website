import Image, { StaticImageData } from "next/image";

interface Props {
  source: string | StaticImageData,
  link: string
}

export const IconButton: React.FC<Props> = ({ source, link }) => {
  return (
    <a href={link} className="cursor-pointer hover:scale-110 transition-all" target='_blank'>
      <Image src={source}/>
    </a>
  )
}
