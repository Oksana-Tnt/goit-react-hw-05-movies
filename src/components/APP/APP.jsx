
import MovieDetails from 'components/Pages/MovieDetails';
import Movies from 'components/Pages/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from 'components/Layout/Layout';
import HomePage from 'components/Pages/HomePage';

const APP = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />|
        <Route path="movies" element={<Movies />} />|
        <Route path="/movies/:movieId" element={<MovieDetails />} />|
        <Route path="*" element={<MovieDetails />} />|
        </Route>|
      </Routes></>
  );
};

export default APP;
