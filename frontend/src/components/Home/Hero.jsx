import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col text-center py-4 sm:py-6 md:py-8'>
                <h1 className='font-bold font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl'>BlogGenie</h1>
                <h3 className='font-sans font-semibold sm:text-lg md:text-xl lg:text-2xl'>Fetch data from News API</h3>
                <h3 className='font-sans font-semibold sm:text-lg md:text-xl lg:text-2xl'>Posts Automatic blog using cron jobs</h3>
            </div>

            <div className='bg-neutral-300 flex justify-center items-center pl-4 rounded-xl'>
                <input
                    type="text"
                    placeholder="Search blogs"
                    className='bg-neutral-300 py-2 pl-2 text-xs sm:text-base md:text-lg outline-none border-none'
                />
                <button
                    className="bg-white text-black py-2 border border-black px-2 rounded-xl text-xs sm:text-base md:text-lg"
                >
                    Search blogs
                </button>
            </div>
        </div>
    )
}

export default Hero