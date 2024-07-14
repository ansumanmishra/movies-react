import {Movie} from '../../shared/interfaces/movie.ts';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect( () => {
    const fetchMovie = async () => {
      setLoading(true);
      const movieResponse = await fetch(`https://freetestapi.com/api/v1/movies/${id}`).finally( () => setLoading(false) );
      const data = await movieResponse.json();
      setMovie(data);
    }
    fetchMovie();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {
        movie?.id ? (
          <span>Selected Movie: {movie.title}</span>
        ) : (
          <span></span>
        )
      }
    </div>
  )
}