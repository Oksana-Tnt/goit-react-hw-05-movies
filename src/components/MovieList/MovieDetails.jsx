import { getMovieById } from 'Services/Film-api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { STATUS } from 'components/APP/APP';
import MovieItem from 'components/MovieItem/MovieItem';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const movieById = async movieId => {
      try {
        setStatus(STATUS.PENDING);
        const data = await getMovieById(movieId);
        setMovie(data.data);
        setGenres(data.data.genres);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    };

    movieById(movieId);
  }, [movieId]);

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.RESOLVED) {
    return (
      <>
        <MovieItem movie={movie} genres={genres} />
        <div>Additional information</div>
        <ul className={css.information}>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
        <Outlet />
      </>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};

export default MovieDetails;
