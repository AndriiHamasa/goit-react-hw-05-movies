import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import searchFilm from 'components/API/api';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';

const MoviesPage = () => {
  const [toggle, settoggle] = useState(false);
  const [searchResponse, setSearchResponse] = useState([]);
  const location = useLocation()

  const [searchFilms, setSearchFilms] = useSearchParams();
  const filmName = searchFilms.get('name') ?? '';

  const updateQueryString = e => {
    const name = e.target.value.toLowerCase();
    const nextParams = name !== '' ? { name } : {};
    setSearchFilms(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    settoggle(true);
  };

  useEffect(() => {
    if (toggle || filmName !== '') {
      async function fetchData() {
        const response = await searchFilm({
          type: 'movies',
          search: filmName,
        });
        console.log('response in details page :>> ', response);
        setSearchResponse(response?.results);
        settoggle(false);
      }

      fetchData();
    }
  }, [toggle, filmName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input type="text" value={filmName} onChange={updateQueryString} />
        </label>
        <button type="submit">Search</button>
      </form>
      {searchResponse.length !== 0 && <MovieDetailsItem films={searchResponse} state={ location} />}
    </>
  );
};

export default MoviesPage;
