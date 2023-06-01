// const BASE_URL = 'https://api.themoviedb.org/3/trending/movie'
let url = null;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmE4YzE2NTE5Mzk1NjVmMjI4MWU1MDY0MzJjYWIwMyIsInN1YiI6IjY0NzRlZTJjOTI0Y2U2MDBkY2IyODliYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2X4n5YSX4hGgZkP27xnajtjEfUPUoPxkoDMVouWB-ek',
  },
};
// 569094
const searchFilm = async params => {
  if (params?.type === 'trend')
    url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  if (params?.type === 'movies')
    url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${params.search}`;
  if (params?.type === 'details')
    url = `https://api.themoviedb.org/3/movie/${params.searchId}?language=en-US`;
  if (params?.type === 'credits')
    url = `https://api.themoviedb.org/3/movie/${params.searchId}/credits?language=en-US`;
  if (params?.type === 'review')
    url = `https://api.themoviedb.org/3/movie/${params.searchId}/reviews?language=en-US&page=1`;
  if (params?.type === 'images')
    url = `https://api.themoviedb.org/3/movie/${params.searchId}/images`;

  try {
    if (!url) return;
    const data = await fetch(url, options);
    console.log('data :>> ', data);
    const response = await data.json();
    console.log('response in api .json() :>> ', await response);
    return await response;
  } catch (error) {
    console.log(error);
  }
};

export default searchFilm;

// 1
// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// 2
// fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=batman', options)

// 3
// fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)

// 4
// fetch('https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US', options)

// 5
// fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1', options)

// images
// fetch('https://api.themoviedb.org/3/movie/movie_id/images', options)
