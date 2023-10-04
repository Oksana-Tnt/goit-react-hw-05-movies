import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (

      <ul className="list-group list-group-flush">
        {movies.map(movie => (
          <Link key={movie.id} to={`${movie.id}`} state={location}>
            <li className="list-group-item">{movie.title}</li>
          </Link>
        ))}
      </ul>
  
  );
};

export default MovieList;
