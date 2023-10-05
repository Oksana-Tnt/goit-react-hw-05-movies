import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const { query } = params;

  return (
    <Suspense fallback={<Loader />}>
      <SearchBar searchParams={setSearchParams} />
      <SearchMovies searchText={query} />
    </Suspense>
  );
};

export default Movies;
