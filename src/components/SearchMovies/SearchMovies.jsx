import React, { useEffect, useState } from 'react';
import Button from 'components/Button/Button';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { searchMovies } from 'Services/Film-api';
import { STATUS } from 'components/APP/APP';
import { useCustomContext } from 'components/Context/Context';

const SearchMovies = ({ searchText }) => {
  const {movies, setMovies} = useCustomContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(()=>{
    movies&&setStatus(STATUS.RESOLVED);
  },[movies]);

  useEffect(() => {
    const requestMovies = async searchText => {
      if (searchText === '' || searchText === undefined) return;
      try {
        const data = await searchMovies(searchText, currentPage);

        if (currentPage === 1) {
          setStatus(STATUS.PENDING);
          setMovies(data.data.results);
          setStatus(STATUS.RESOLVED);
        } else {
          setMovies(prevState => [...prevState, ...data.data.results]);
          setStatus(STATUS.RESOLVED);
        }
      } catch (err) {
        setStatus(STATUS.REJECTED);
      }
    };

    requestMovies(searchText);
  }, [searchText, currentPage, setMovies]);

  const loadMoreMovies = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.RESOLVED) {
    return (
      <>
        <MovieList movies={movies} />|
        <Button loadMoreMovies={loadMoreMovies} />
      </>
    );
  } else if (status === STATUS.REJECTED) return <ErrorCard />;
};

export default SearchMovies;
