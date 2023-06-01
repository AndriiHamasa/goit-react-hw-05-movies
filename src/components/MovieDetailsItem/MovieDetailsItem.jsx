import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const MovieDetailsItem = (params) => {

  const location = useLocation()

  const getLink = (filmId) => {
    if (params?.from === 'homepage') return `movies/${filmId}`
    return `${filmId}`
  }

  return (
    <ul>
      {params.films.map(film => (
        <li key={film.id}>
          <Link to={getLink(film.id)} state={location}>{film.title || film.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieDetailsItem;
