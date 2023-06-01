import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import searchFilm from 'components/API/api';

const Reviews = () => {
  const [searchReviews, setSearchReviews] = useState([]);

  const params = useParams();
  const filmId = params.movieId;
  console.log('response in reviews', params);

  useEffect(() => {
    
    async function fetchData() {
      const response = await searchFilm({
        type: 'review',
        searchId: filmId,
      });
      console.log('response in details page :>> ', response);

      setSearchReviews(response.results);
    }

    if(searchReviews.length === 0) fetchData()
    
    
  }, [filmId, searchReviews]);

  return (
    searchReviews && (
      <ul>
        {searchReviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>Content: { review.content}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Reviews;
