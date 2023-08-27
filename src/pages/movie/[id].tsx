import { Movie } from '@/core/entities/Movie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MovieRepository } from '../../data/repositories/MovieRepository';
import MovieDetails from '../../ui/components/MovieDetails';

const movieRepository = new MovieRepository();

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie | null>(null);
  
  useEffect(() => {
    async function fetchMovieDetails() {
      if (id) {
        const details = await movieRepository.getMovieDetails(Number(id));
        setMovie(details);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>; 
  return <MovieDetails movie={movie} />;
}

