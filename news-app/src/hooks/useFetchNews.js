import { useEffect, useState } from 'react'
import { getNews } from '../helpers/FetchApi';

export const useFetchNews = (searchTerm) => {
  
    const [description, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getNews = async ()=>{     
      const newNews = await getNews(searchTerm);
      setNews(newNews);
      setLoading(false);
    }  
     
    useEffect( () => {
         getNews()
    }, [])  
    
    return {
        description,
        loading,
    };
}
