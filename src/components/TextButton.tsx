import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  label: string,
  link: string,
  icon?: string | StaticImageData,
  className?: string,
}

export const TextButton: React.FC<Props> = ({ label, icon, link, className }) => {
  const extraClass = className ?? ''
  return (
    <a href={link} className={`clickable flex box-border items-center mt-1 ${extraClass}`} target='_blank'>
      {!!icon && <Image src={icon} draggable={false} />}
      <p className='pl-2'>{label}</p>
    </a>
  )
}
