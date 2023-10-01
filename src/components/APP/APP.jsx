
import MovieDetails from 'components/MovieList/MovieDetails';
import Movies from 'components/Pages/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'components/Layout/Layout';
import HomePage from 'components/Pages/HomePage';
import NonFound from 'components/NonFound/NonFound';

const APP = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />|
        <Route path="movies" element={<Movies />} />|
        <Route path=":movieId" element={<MovieDetails />} />|
        <Route path="*" element={<NonFound />} />|
        </Route>|
      </Routes></>
  );
};

export default APP;
