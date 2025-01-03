import React from 'react'
import panda from '../../assets/panda.webp'
import arrow from '../../assets/right-arrow.png'

const Card = ({img, heading, summary}) => {
  return (
    <div className=' bg-neutral-300 p-2 md:p-4 rounded-md'>
        <img src={panda} alt="Source Image" className='rounded-md'/>
        <div className='pt-2'>
            <h1 className='font-bold font-sans text-sm'>Here the heading will be present</h1>
            <p className='text-xs py-1'>This section is all about the summary and just a random thing for design so i can write whatever i want just to fill this area</p>
        </div>
        <div className='flex bg-neutral-800 justify-center items-center gap-2 rounded-md mt-2'>
            <button className='text-white'>Read Full Article</button>
            <img src={arrow} alt="" className='size-8'/>
        </div>
        
    </div>
  )
}

export default Card