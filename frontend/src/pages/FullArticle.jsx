import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const FullArticle = () => {
    const { id } = useParams();
    const [articleData, setArticleData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`https://bloggenie.onrender.com/api/v1/article/${id}`);
                setArticleData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchArticle();
    }, [id]);

    if (error) {
        return <p>Error: {error}</p>;
      }
    
      if (loading || !articleData) {
        return <p>Loading...</p>;
      }

    const {title, image, text, summary, source} = articleData

    return (
        <div className='flex flex-col items-center justify-center px-5 md:px-10 lg:px-20 py-5'>
            <div className='flex flex-col items-center m-2 py-3 gap-4'>
                <h1 className='text-xl font-bold font-sans text-center md:text-3xl lf:text-4xl'>{title}</h1>
                <img src={image} alt="Image of the article" className='rounded-md aspect-auto w-2/3' />
            </div>
            <div className='flex flex-col m-2 py-2 md:m-4 lg:m-5 md:px-8'>
                <p className='text-sm font-sans font-medium pb-2 md:text-base lg:text-lg'><span className='underline text-base font-sans font-semibold md:text-lg lg:text-xl'>Articel:</span>{' '}{text}</p>
                <p className='text-sm font-sans font-medium  md:text-base lg:text-lg'><span className='underline text-base font-sans font-semibold md:text-lg lg:text-xl'>Summary:</span>{' '}{summary}</p>
            </div>
            <a href={source} className='text-blue-500 cursor-pointer'>Visit Official Page</a>
        </div>
    )
}

export default FullArticle