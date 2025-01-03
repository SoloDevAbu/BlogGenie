import React from 'react'
import logo from '../assets/BG.png'

const Navbar = () => {
  return (
    <div className='flex justify-center sm:justify-start items-center w-full m-2 border-b-2 border-gray-200'>
        <img src={logo} alt="BG" className='size-10 rounded-full'/>
        <h1 className='px-1 font-bold font-serif text-xl'>BlogGenie</h1>
    </div>
  )
}

export default Navbar