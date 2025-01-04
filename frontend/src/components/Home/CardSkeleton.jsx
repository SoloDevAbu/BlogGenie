import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import React from 'react'
import arrow from '../../assets/right-arrow.png'
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ number }) => {
    return (
        Array(number)
            .fill(0)
            .map((_, index) => (
                <SkeletonTheme baseColor="#525252" highlightColor="#808080">
                    <div className=' flex flex-col justify-between bg-neutral-300 p-2 md:p-4 rounded-md'key={index}>
                        <Skeleton className='aspect-video' />
                        <div className='pt-2'>
                            <h1><Skeleton /></h1>
                            <p><Skeleton count={3} /></p>
                        </div>
                        <div className='flex bg-neutral-800 justify-center items-center gap-2 rounded-md mt-2'>
                            <button className='text-white'>Read Full Article</button>
                            <img src={arrow} alt="" className='size-8' />
                        </div>
                    </div>
                </SkeletonTheme>
            )))
}

export default CardSkeleton