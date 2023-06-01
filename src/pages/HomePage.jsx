import searchFilm from 'components/API/api';
import { useEffect, useState } from 'react';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';

const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await searchFilm({ type: 'trend' });
      if (trendingFilms.length === 0) setTrendingFilms(response.results);
    }

    fetchData();
  }, [trendingFilms]);

  return (
    <>
      <h1>Trending today</h1>
      {trendingFilms.length !== 0 && <MovieDetailsItem films={ trendingFilms} from='homepage' />}
    </>
  );
};

export default HomePage;
