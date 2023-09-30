import HomePage from 'components/Pages/HomePage';
import MovieDetails from 'components/Pages/MovieDetails';
import Movies from 'components/Pages/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const APP = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />|
      <Route path="/movies" element={<Movies />} />|
      <Route path="/moviedetails" element={<MovieDetails />} />|
    </Routes>
  );
};

export default APP;
