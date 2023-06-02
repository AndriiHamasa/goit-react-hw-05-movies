import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Layout from './Layout';
// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import Cast from './Cast';
// import Reviews from './Reviews';

// const MyComponent = lazy(() => import("path/to/MyComponent"));
const Layout = lazy(() => import('./Layout'));
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          {/* <Route index element={''} /> */}
          {/* <h2>Children in children</h2> */}
        </Route>
      </Routes>
    </Suspense>
  );
};
