
//Here the API is being called
export const getNews = async (searchTerm) =>{

  const API_KEY = '72e623b2c937460795bee83bda1b9db9';
  
  const url = `https://newsapi.org/v2/everything?q=${category}&country=ar&apiKey=${API_KEY}`;
  
    const resp = await fetch(url);
  
    const { data } = await resp.json()
    //get a number from 1 to 10
 
    const newsy = data.map(articles => (
      {
        art: articles.source.name,
        author: articles.author,
        title: articles.title,
        desc: articles.description,
        url: articles.url
      }
    ))
  
    console.log(newsy);
      return newsy;
  }