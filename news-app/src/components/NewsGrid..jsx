import { useFetchGif } from "../hooks/useFetchGif";
import { NewsItem } from "./NewsItem";

export const newsGrid = ({searchTerm}) => {

  const {description, loading} = useFetchG(searchTerm);
  //get a random number from 1 to 10

  
  return (
    <>
        <h3>{category}</h3>     
        
        <div className="card-grid">
          {
            loading ? <h2>Cargando...</h2> :
            description.map(imagen => <NewsItem key={imagen.id} {...imagen} />)
            
          }
 
          
        </div>     
            
    </>
  )
}
