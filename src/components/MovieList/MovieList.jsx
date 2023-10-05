import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className="list-group list-group-flush">
      {movies.map(movie => (
        <Link
          className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover "
          key={movie.id}
          to={`${movie.id}`}
          state={{from:location}}
        >
          <li className="list-group-item ">{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
