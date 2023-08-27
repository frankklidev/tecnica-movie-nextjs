import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setMovieDetails } from '../app/state/movieSlice';
import config from '@/config/config';
import { Movie } from '@/core/entities/Movie';

function useMovieDetails(): Movie | null {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const movie = useSelector((state: any) => state.movie.movieDetails) as Movie | null;

  useEffect(() => {
    if (id) {
      axios.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}`)
        .then(response => {
          dispatch(setMovieDetails(response.data));
        })
        .catch(error => {
          console.error('Error fetching movie details:', error);
        });
    }
  }, [id, dispatch]);

  return movie;
}

export default useMovieDetails;
