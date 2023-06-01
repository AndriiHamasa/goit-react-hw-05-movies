import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import searchFilm from 'components/API/api';

const Cast = () => {
  const [searchCast, setSearchCast] = useState([]);

  const params = useParams();
  const filmId = params.movieId;
  console.log('response in cast', params);

  useEffect(() => {
    if (searchCast.length === 0) {
      async function fetchData() {
        const response = await searchFilm({
          type: 'credits',
          searchId: filmId,
        });
        console.log('response in details page :>> ', response);

        setSearchCast(response.cast);
      }

      fetchData();
    }
  }, [filmId, searchCast]);

  return (
    searchCast.length !== 0 && (
      <ul>
        {searchCast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt="actor"
              width={150}
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
