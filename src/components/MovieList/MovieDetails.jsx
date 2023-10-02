import { getMovieById } from 'Services/Film-api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  
  const CONFIG = 'https://image.tmdb.org/t/p/w300';
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

useEffect(()=>{
  const movieById = async movieId => {
    try {
      const data = await getMovieById(movieId);
      setMovie(data.data);
      setGenres(data.data.genres);
      console.log(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  movieById(movieId);

},[])
  

  return (
    <><div className={css.card}>
      <img src={`${CONFIG}/${movie.poster_path}`} />
      <div className={css.descriptions}>
        <h2 className={css.title}>{`${movie.title} (${movie.release_date})`}</h2>
        <p className={css.score}>User score: {`${(movie.vote_average * 10).toFixed(2)}%`}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <div className={css.genres}>
          <h3>Genres</h3>
          <ul className={css.genresList}>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div><div>Additional information</div>
    <ul className={css.information}>
      <Link to="cast">Cast</Link> 
      <Link to="reviews">Reviews</Link> 
    </ul>
    <Outlet />
    </>
  );
};

export default MovieDetails;
