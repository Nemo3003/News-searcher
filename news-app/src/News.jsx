import React from 'react';
import {Navbar} from './components/Navbar';
import { Search } from './components/Search';



export const News = () => {
    return (
       <>
        <Navbar/>
        <div>
        <h1>Noticias</h1>
        <Search/>
        </div>
        </>
    );
    }