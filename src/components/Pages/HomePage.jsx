import { getMovies } from 'Services/Film-api';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const requestMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    requestMovies();
  }, []);

  return (
    <>
    <h1>Trending today</h1>
      <MovieList movies={movies}/>
    </>
  );
};

export default HomePage;
