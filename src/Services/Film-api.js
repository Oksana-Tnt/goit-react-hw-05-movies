import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const API_KEY = '05fecd37f4938abe676372f3977174d8';
const ID_URL = 'https://api.themoviedb.org/3/movie';



export const getMovies = () => {  

    axios.defaults.params = {
        api_key: API_KEY,
      };

  return axios.get(BASE_URL);
};

export const getMovieById =(id)=>{
    axios.defaults.params = {
        api_key: API_KEY,
      };

  return axios.get(`${ID_URL}/${id}`);
}

export const getCastById =(id, END_POINT)=>{
  axios.defaults.params = {
      api_key: API_KEY,
    };

return axios.get(`${ID_URL}/${id}/${END_POINT}`);
}