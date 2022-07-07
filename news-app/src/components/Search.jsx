import { useState } from 'react'

const handleReset = () => window.location.reload()

export const Search= ({searchTerm }) =>{

    const [inputValue,setInputValue] = useState('');

    const handleInputChange = ({ target }) =>{
        setInputValue(target.value);
        
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length < 3) return;
        
        searchTerm(inputValue.trim());
        setInputValue('');
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Buscar Noticia'
                onChange={handleInputChange}
                
            />
        </form>
        <button className="button-30" role="button" onClick={handleReset}>Reset</button>

        </>
    )
}
