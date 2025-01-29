import Link from 'next/link';
import React from 'react'

const NavBar = ({textColor}) => {
  return (
    <div className={`hidden md:flex gap-4 my-auto ${textColor} font-extrabold text-xl`}>
      <Link href="/" className='hover:text-liveColor'>
        <div>Home</div>
      </Link>

      <Link href="/nosotros" className='hover:text-liveColor'>
        <div>Nosotros</div>
      </Link>

      <Link href="/contacto" className='hover:text-liveColor'>
        <div>Contacto</div>
      </Link>
    </div>
  );
}

export default NavBar