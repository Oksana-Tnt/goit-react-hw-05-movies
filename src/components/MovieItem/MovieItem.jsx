import React from 'react';
import css from './MovieItem.module.css';
import defaultImg from '../vecteezy_icon-image-not-found-vector_.jpg';

const MovieItem = ({ movie, genres }) => {
  const CONFIG = 'https://image.tmdb.org/t/p/w300';

  return (
    <div className={css.card}>
      {movie.poster_path ? (
        <img src={`${CONFIG}/${movie.poster_path}`} alt={movie.title} />
      ) : (
        <img src={defaultImg} alt={movie.title} />
      )}

      <div className={css.descriptions}>
        <h2
          className={css.title}
        >{`${movie.title} (${movie.release_date.substring(0,4)})`}</h2>
        <p className={css.score}>
          User score: {`${(movie.vote_average * 10).toFixed(2)}%`}
        </p>
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
    </div>
  );
};

export default MovieItem;
