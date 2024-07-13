import {Movie} from '../../shared/interfaces/movie.ts';

export default function MovieDetails({movie}: { movie: Movie }) {
  return (
    <div>
      {
        movie.id ? (
          <span>Selected Movie: {movie.title}</span>
        ) : (
          <span>No Movie selected</span>
        )
      }
    </div>
  )
}