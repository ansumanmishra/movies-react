import './App.css'
import MovieListing from './pages/movie/MovieListing.tsx';
import MovieDetails from './pages/movie/MovieDetails.tsx';
import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router';
import Layout from './pages/layout/Layout.tsx';
import About from './pages/about/About.tsx';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MovieListing />,
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
