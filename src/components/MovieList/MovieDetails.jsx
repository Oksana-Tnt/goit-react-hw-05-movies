import { getMovieById } from 'Services/Film-api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { STATUS } from 'components/APP/APP';
import MovieItem from 'components/MovieItem/MovieItem';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const location = useLocation();

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

  const backLinkHref = location.state;

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.RESOLVED) {
    return (
      <>
        <p>
          <Link
            to={backLinkHref}
            className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Back to movies
          </Link>
        </p>
        <MovieItem movie={movie} genres={genres} />
        <div>Additional information</div>
        <ul className={css.information}>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};

export default MovieDetails;
