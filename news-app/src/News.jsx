import  React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {Search} from './components/Search'


export const News = ()=>{

    const [data, setData] = useState([])
    const [term, setTerm] = useState([])

    const getNews = ()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=de&category=${term}&apiKey=72e623b2c937460795bee83bda1b9db9`)
        .then((response)=>{
            setData(response.data.articles)
        })
    }
    return(
        <>
        <Search searchText={(text) =>{
            setTerm(text)
        }}/>
      <div className='container my-3'>
        <button className='btn btn-primary' onClick={getNews}>Fetch News</button>
      </div>
      <div className='container'>
            <div className='row'>
                <div className="column">
                {
                        data.map((value)=>{
                            return(
                                <div className="card" style={{width: "18rem"}}>
                                <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{value.title}</h5>
                                    <p className="card-text">{value.description}</p>
                                    <a href={value.url} className="btn btn-primary">Saber mas...</a>
                                </div>
                                </div>
                          
                            );
                        })
                    } 
                
            </div>
      </div>
      </div>
    </>
  );
}