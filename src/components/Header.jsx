import React from 'react'
import { Link } from 'react-router-dom'
import MarketStatus from './MarketStatus';

const Header = () => (
  <header className='md:h-20 h-44 flex flex-col sticky top-0 gap-4 md:flex-row md:justify-between justify-center items-start md:items-center bg-[#3A2D7D] text-white drop-shadow-xl px-8 md:px-20 z-20'>
    <Link to="/"><div className='text-white'> <h1 className='font-bold text-xl sm:text-3xl'>Market Watch </h1><MarketStatus/> </div></Link>
    <nav className='justify-between'>
      <ul className='flex flex-col md:flex-row gap-x-4 font-semibold'>
        <Link to="/nifty50"><li className='hover:border-b-4'>Nifty50</li></Link>
        <Link to="/niftybank"><li className='hover:border-b-4'>Nifty Bank</li></Link>
        <Link to="/niftyfinservice"><li className='hover:border-b-4'>Nifty Financial Services</li></Link>
      </ul>
    </nav>
  </header>
)

export default Header;