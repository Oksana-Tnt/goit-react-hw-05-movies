import React from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'components/Layout/Layout';
import HomePage from 'components/Pages/HomePage';

const Movies = lazy(() => import('components/Pages/Movies'));
const NonFound = lazy(() => import('components/NonFound/NonFound'));
const MovieDetails = lazy(() => import('components/MovieList/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          |
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
