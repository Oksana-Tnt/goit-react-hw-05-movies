import SearchBar from 'components/SearchBar/SearchBar';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get('query');

  return (
    <>
      <SearchBar searchParams={setSearchParams} />
      <SearchMovies searchText={searchText} />
    </>
  );
};

export default Movies;
