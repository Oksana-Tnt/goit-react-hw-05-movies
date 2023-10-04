import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul className="list-group list-group-flush">
      {movies.map(movie => (
        <Link key={movie.id} to={`${movie.id}`}>
          <li className="list-group-item">{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
