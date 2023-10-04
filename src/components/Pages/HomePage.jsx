import { getMovies } from 'Services/Film-api';
import { STATUS } from 'components/APP/APP';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const requestMovies = async () => {
      try {
        setStatus(STATUS.PENDING);
        const data = await getMovies();
        setMovies(data.data.results);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    };

    requestMovies();
  }, []);

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.RESOLVED) {
    return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={movies} />
      </>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};

export default HomePage;
