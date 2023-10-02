import { getMovieById } from 'Services/Film-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieById = async movieId => {
      try {
        const data = await getMovieById(movieId);
        setMovie(data.data);
        console.log(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    movieById(movieId);
  }, [movieId]);

  return (
    <div>
      {/* <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} /> */}
      <h2>{movie.title}</h2>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
    </div>
  );
};

export default MovieDetails;
