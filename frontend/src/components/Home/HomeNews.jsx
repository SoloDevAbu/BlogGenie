import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardSkeleton from './CardSkeleton';
import Card from './Card'

const HomeNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://bloggenie.onrender.com/api/v1/me/news')
        setNews(response.data.reverse());
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      };
    };
    fetchNews();
  }, []);

  if(error) {
    return <p> Error: {error}</p>
  }
  return (
    <div className='flex flex-col'>
        <div className='grid grid-cols-2 justify-between gap-4 px-5 md:grid-cols-3 lg:grid-cols-4 pt-5 md:pt-8 lg:pt-10'>
         {loading && (<CardSkeleton number={8}/>)}
            {news.map((article) => (
                <Card key={article._id} articleId={article._id} image={article.image} title={article.title} summary={article.summary}/>                          
            ))}
        </div>
    </div>
  )
}

export default HomeNews