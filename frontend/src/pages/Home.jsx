import React from 'react'
import Hero from '../components/Home/Hero'
import Card from '../components/Home/Card'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Hero/>
        <div className='grid grid-cols-2 justify-between gap-4 px-5 md:grid-cols-3 lg:grid-cols-4 pt-5 md:pt-8 lg:pt-10'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Home