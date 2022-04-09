import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { icons } from '../assets';
import { LOCATION } from '../constants';
import { TextButton } from './TextButton';

export const Navigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleClickHamburger = useCallback(() => {
    setHamburgerOpen(v => !v);
  }, []);

  return (
    <>
      <nav className='flex flex-row justify-between my-4 lg:my-10 w-full'>
        <div onClick={handleClickHamburger} className='clickable flex items-center justify-center sm:hidden'>
          <Image src={icons.hamburger} alt='Hamburger Menu'/>
        </div>

        <ul className='navList'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <TextButton icon={icons.locationPin} label={LOCATION} link={`https://www.google.com/maps/place/${LOCATION}`}/>
      </nav>
      
    </>

  )
}