import { getMovieById } from "Services/Film-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const {movieId} = useParams();
  
  const[movie, setMovie] = useState(null);

  useEffect(()=>{
    const movieById = async (movieId) => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data.data);
              
      } catch (err) {
        console.log(err);
      }
    };

    movieById(movieId);

  }, [movieId]);

  
  

  return (<div>Now showing product with id - {movieId}</div>);
};

export default MovieDetails