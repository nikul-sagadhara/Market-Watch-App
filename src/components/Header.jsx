import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-20 flex justify-center items-center bg-[#3A2D7D] text-white drop-shadow-xl'>
        <nav className='flex justify-between w-11/12'>
        <Link to="/"><span className='font-bold text-3xl text-white'>Market Watch</span></Link>
        <ul className='flex gap-x-4 font-semibold'>
                    <Link to="/nifty50"><li className='hover:border-b-4'>Nifty50</li></Link>
                    <Link to="/niftybank"><li className='hover:border-b-4'>Nifty Bank</li></Link>
                    <Link to="/niftyfinservice"><li className='hover:border-b-4'>Nifty Financial Services</li></Link>
                    <Link to="/crypto"><li className='hover:border-b-4'>Crypto</li></Link>
                </ul>
        </nav>
    </header>
  )
}

export default Header;