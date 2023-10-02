import { getCastById } from "Services/Film-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
    const END_POINT='credits';
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const CONFIG = 'https://image.tmdb.org/t/p/w200';

  useEffect(()=>{
    const castById = async movieId => {
      try {
        const data = await getCastById(movieId, END_POINT);
        setCast(data.data.cast);    
      } catch (err) {
        console.log(err);
      }
    };
  
    castById(movieId);
  
  },[movieId])
    
    return(
        <>
        <ul>    
            {cast.map(item=>(
                <li key={item.id}>
                    <img src={`${CONFIG}/${item.profile_path}`} />
                    <p>{item.name}</p>
                    <p>Character: {item.character}</p>
                </li>
            ))}
        
      </ul>
        </>     
  
    );
   
  };
  
  export default Cast;
  