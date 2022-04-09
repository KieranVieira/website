import type { NextPage } from 'next';
import Image from 'next/image';

import { images, icons } from '../assets';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
import { ProjectCard } from '../components/ProjectCard';
import { TextButton } from '../components/TextButton';
import { CURRENT_POSITION, SKILLS } from '../constants';

const Home: NextPage = () => {
  return (
    <div className='content-container'>
      <Navigation/>

      <header className="flex flex-col items-center justify-between my-20 lg:flex-row lg:my-32">
        <div className="relative flex h-52 w-52 rounded-full border-8 mb-4 border-paleBlue shadow-xl lg:order-2 lg:mb-0 select-none">
          <Image src={images.displayPicture} className='rounded-full' draggable={false}/>
          <div className='absolute -top-10 -left-14'>
            <Image src={icons.avatarArrow} draggable={false}/>
          </div>
        </div>
        <div className="flex flex-col text-center sm:w-[415px] lg:order-1 lg:text-left">
          <h1>Hi, I'm Kieran,</h1>
          <h2 className="text-blue">Software Engineer</h2>
          <p>I am based in Canada. Currently working as a {CURRENT_POSITION}. And interested in collaborating to build scalable innovative applications.</p>
        </div>
      </header>

      <section>
        <h2>What I do ☕</h2>
        <p>I enjoy building scalable, meaningful applications that serve a purpose. I normally wear a lot of hats when I build projects, moving from UI/UX, to containerized micro-service deployment using CI/CD. Getting to work in all these different areas is something you don't normally get to experience professionally in a work environment, so I value that extra time I get to spend on my projects.</p>
        <div className="section-content flex flex-col w-full space-y-10 md:space-y-0 md:space-x-5 md:flex-row lg:space-x-10">
          <ProjectCard projectImage={images.bigflop} title="Bigflop.io" link='https://bigflop.io' />
          <ProjectCard projectImage={images.ladNetwork} title="LAD Network" link='https://github.com/labs11-ad-network/labs11-adNetwork-FE' />
        </div>
      </section>

      <section>
        <h2>How I do it 💻️️️</h2>
        <p>I'm constantly seeking the next best thing, however this is the list of technical skills I use to create scalable applications. My main focus recently has been with React Native as I love building mobile experiences, Node.js on the backend with various different implementations, and kubernetes with docker for deployment of services.</p>
        <div className="section-content flex flex-row flex-wrap">
          {SKILLS.map((skill, i) => {
            return (
              <TextButton 
                label={skill.label} 
                icon={skill.icon} 
                link={skill.link} 
                className='basis-1/2 md:basis-1/3 lg:basis-1/4'
              />
            )
          })}
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Home
