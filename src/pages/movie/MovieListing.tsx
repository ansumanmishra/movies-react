import {useEffect, useState} from 'react';
import MovieDetails from './MovieDetails.tsx';
import './Movie.css';
import {Movie} from '../../shared/interfaces/movie.ts';
import {Link} from 'react-router-dom';

const movieApiUrl = 'https://freetestapi.com/api/v1/movies';

export default function MovieListing() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(movieApiUrl)
        .then(response => response.json())
        .then(data => setMovies(data))
        .finally(() => setLoading(false));
    } catch (error) {
      setError(error);
    }

    fetch(movieApiUrl)
      .then(response => response.json())
      .then(data => setMovies(data))
      .finally(() => setLoading(false));
  }, []);

  const addMovie = () => {
    /*    setMovies(prevMovies => [
          ...prevMovies,
          {id: movies.length + 1, name: "The Godfather", year: 1972}
        ]);*/
  }

  const onMovieSelected = (movie: Movie) => {
    // props.setSelectedMovie(movie);
    setSelectedMovie(movie);
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong, please try again</div>
  }

  return (
    <>
      <div>
        <h2>Movies</h2>
        <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere
          in-between. So many titles, so much to experience.</p>
        <h3>Your next watch</h3>
        <div className="movies-container">
          {movies.map(movie => (
            <div className="movie-block" key={movie.id} onClick={() => onMovieSelected(movie)}>
              <Link to={`/movies/${movie.id}`}>

                <span className="movie-title">{movie.title} ({movie.year})</span>
                <img src={movie.poster} alt=""/>
              </Link>
            </div>
          ))
          }
        </div>
        {/*
        <button onClick={addMovie}>Add Movie</button>
*/}
      </div>
    </>
  )
}