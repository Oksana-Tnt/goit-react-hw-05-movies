import axios from 'axios';

const BASE_URL =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const ID_URL = 'https://api.themoviedb.org/3/movie';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '05fecd37f4938abe676372f3977174d8';

export const getMovies = () => {
  axios.defaults.params = {
    api_key: API_KEY,
  };

  return axios.get(BASE_URL);
};

export const getMovieById = id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };

  return axios.get(`${ID_URL}/${id}`);
};

export const getDetailsById = (id, END_POINT) => {
  axios.defaults.params = {
    api_key: API_KEY,
  };

  return axios.get(`${ID_URL}/${id}/${END_POINT}`);
};

export const searchMovies = (searchText, currentPage = 1) => {
  axios.defaults.params = {
    api_key: API_KEY,
    page: currentPage,
  };

  return axios.get(`${SEARCH_URL}?query=${searchText}`);
};
