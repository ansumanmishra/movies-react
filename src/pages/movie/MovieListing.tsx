import {useEffect, useState} from 'react';
import MovieDetails from './MovieDetails.tsx';
import './Movie.css';
import {Movie} from '../../shared/interfaces/movie.ts';

const movieApiUrl = 'https://freetestapi.com/api/v1/movies';

export default function MovieListing() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);

  useEffect( () => {
    fetch(movieApiUrl)
      .then(response => response.json())
      .then(data => setMovies(data));
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

  return (
    <>
      <div>
        <h2>Movies</h2>
        <h4>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</h4>
        <div className="movies-container">
          {movies.map(movie => (
            <div className="movie-block" key={movie.id} onClick={() => onMovieSelected(movie)}>
              <span className="movie-title">{movie.title} ({movie.year})</span>
              <img src={movie.poster} alt=""/>
            </div>
          ))
          }
        </div>

        <button onClick={addMovie}>Add Movie</button>
      </div>
      {
        selectedMovie && (
          <>
            <div>Movie Details</div>
            <MovieDetails movie={selectedMovie}/>
          </>
        )
      }
    </>
  )
}