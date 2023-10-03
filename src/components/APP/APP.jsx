import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from 'components/MovieList/MovieDetails';
import Movies from 'components/Pages/Movies';
import React from 'react';
import Layout from 'components/Layout/Layout';
import HomePage from 'components/Pages/HomePage';
import NonFound from 'components/NonFound/NonFound';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const APP = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />|
          <Route path="movies" element={<Movies />} />|
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>{' '}
          |
          <Route path="*" element={<NonFound />} />|
        </Route>
        |
      </Routes>
    </>
  );
};

export default APP;
