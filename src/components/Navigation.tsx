import Link from 'next/link';

import LocationPin from '../assets/icons/location_pin.svg';
import { LOCATION } from '../constants';
import { TextButton } from './TextButton';

export const Navigation = () => {
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

      <TextButton icon={LocationPin} label={LOCATION} link={`https://www.google.com/maps/place/${LOCATION}`}/>
    </nav>
  )
}