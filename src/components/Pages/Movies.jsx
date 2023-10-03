import { searchMovies } from 'Services/Film-api';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);

  const searchText= searchParams.get('query');

  // useEffect(() => {
  //   setMovies([]);
  //   setCurrentPage(1);
  // }, [searchText]);

  useEffect(() => {
    const requestMovies = async (searchText) => {
      if (searchText === '') return;

      try {
        const data = await searchMovies(searchText);
        console.log(searchText);
        if (currentPage === 1) {
          // setStatus(STATUS.PENDING);
          setMovies(data.data);
          console.log(data.data);
          // setStatus(STATUS.RESOLVED);
        } else {
          setMovies(prevState => [...prevState, ...data.data.hits]);
          // setStatus(STATUS.RESOLVED);
        }
      } catch (err) {
        // setStatus(STATUS.REJECTED);
      }
    };

    requestMovies(searchText);
  }, [searchText]);

  return (
    <>
      <SearchBar searchParams={setSearchParams} />
      
    </>
  );
};

export default Movies;
