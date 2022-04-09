import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

import LocationPin from '../assets/icons/location_pin.svg';
import { LOCATION } from '../constants';
import { useDarkMode } from '../hooks/useDarkMode';
import { TextButton } from './TextButton';

export const Navigation = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const handlePressThemeToggle = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode, setDarkMode]);

  return (
    <nav className='flex flex-row justify-between my-10 w-full'>
      <ul className='hidden none flex-row items-center space-x-10 text-lg sm:flex'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>

      <div className='flex flex-row items-center'>
        <TextButton icon={LocationPin} label={LOCATION} link={`https://www.google.com/maps/place/${LOCATION}`}/>
        <div onClick={handlePressThemeToggle} className='flex items-center justify-center bg-black text-white dark:text-black h-7 w-7 ml-3 rounded-2xl text-sm hover:cursor-pointer hover:scale-110 transition-transform'>
          {darkMode ? '🌙' : '☀️'}
        </div>
      </div>
    </nav>
  )
}