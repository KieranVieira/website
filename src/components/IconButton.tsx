import Image, { StaticImageData } from "next/image";

interface Props {
  source: string | StaticImageData,
  link: string,
  alt: string,
}

export const IconButton: React.FC<Props> = ({ source, link, alt }) => {
  return (
    <a href={link} className="clickable" target='_blank' rel="noreferrer">
      <Image src={source} alt={alt}/>
    </a>
  )
}
