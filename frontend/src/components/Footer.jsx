import React from 'react'
import xLogo from '../assets/twitter.png'
import linkdinLogo from '../assets/linkedin.png'
import threadsLogo from '../assets/threads.png'
import githubLogo from '../assets/github.png'

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-3 pt-5'>
        <a href="https://x.com/AbuBakkar2502" target='_blank'><img src={xLogo} alt="" className='size-6 sm:size-7 md:size-8'/></a>
        <a href="https://www.linkedin.com/in/abu-bakkar-siddique-546112205/" target='_blank'><img src={linkdinLogo} alt="" className='size-6 sm:size-7 md:size-8'/></a>
        <a href="https://www.threads.net/@devabu2502" target='_blank'><img src={threadsLogo} alt="" className='size-6 sm:size-7 md:size-8'/></a>
        <a href="https://github.com/SoloDevAbu" target='_blank'><img src={githubLogo} alt="" className='size-6 sm:size-7 md:size-8'/></a>
    </div>
  )
}

export default Footer