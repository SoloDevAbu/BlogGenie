import React from 'react'
import arrow from '../../assets/right-arrow.png'

const Card = ({image, title, summary}) => {
  return (
    <div className=' flex flex-col justify-between bg-neutral-300 p-2 md:p-4 rounded-md'>
        <img src={image} alt={title} className='rounded-md'/>
        <div className='pt-2'>
            <h1 className='font-bold font-sans text-sm'>{title}</h1>
            <p className='text-xs py-1'>{summary}</p>
        </div>
        <div className='flex bg-neutral-800 justify-center items-center gap-2 rounded-md mt-2'>
            <button className='text-white'>Read Full Article</button>
            <img src={arrow} alt="" className='size-8'/>
        </div>
        
    </div>
  )
}

export default Card