import { icons } from "../assets";
import { TWITTER_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../constants";
import { IconButton } from "./IconButton";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between w-full border-t border-lightGray dark:border-gray py-8">
      <div>
        <h3 className="text-gray mb-1">Kieran Vieira</h3>
        <h6 className="text-gray">© {year}</h6>
      </div>
      <div className="flex flex-row items-center space-x-4 select-none">
        <IconButton source={icons.linkedin} link={LINKEDIN_LINK} />
        <IconButton source={icons.twitter} link={TWITTER_LINK} />
        <IconButton source={icons.github} link={GITHUB_LINK} />
      </div>
    </footer>
  )
}
