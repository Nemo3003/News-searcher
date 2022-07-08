import React, {useState} from 'react'

export const Search = ({searchText})=>{
    //const [term, setTerm] = useState([])
    const [text, setText] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault()
        searchText(text)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Ejemplo: politics' onChange={(e)=>setText(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}