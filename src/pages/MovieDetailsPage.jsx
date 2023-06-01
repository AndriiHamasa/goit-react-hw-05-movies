import searchFilm from 'components/API/api';
import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const MovieDetailsPage = () => {
  const [filmDetails, setFilmDetails] = useState([]);
  const navigate = useNavigate()
  const location = useLocation()

  const params = useParams();
  const filmId = params.movieId;
  console.log('genreId :>> ', filmId);
  const backLink = useRef(location.state ?? "/")
  console.log('backLink', backLink)
  // console.log('authorName :>> ', authorName)

  const handleClick = () => {
    navigate(backLink.current)
  }

  useEffect(() => {
    if (filmDetails.length === 0) {
      async function fetchData() {
        const response = await searchFilm({
          type: 'details',
          searchId: filmId,
        });
        console.log('response in details page :>> ', response);
        setFilmDetails(response);
      }

      fetchData();
    }
  }, [filmId, filmDetails]);

  

  return (
    <>
      <button onClick={handleClick}>Go Back</button>
      {filmDetails.length !== 0 && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`} alt="film" width={320}/>
          <h1>{filmDetails.title}</h1>
          <p>User score: {filmDetails.popularity}%</p>
          <h2>Overview</h2>
          <p>{filmDetails.overview ?? 'There no information'}</p>
          <h2>Genres</h2>
          <p>{filmDetails.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      )}
      <div>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet/>
      </div>
    </>
  );
};

export default MovieDetailsPage;
