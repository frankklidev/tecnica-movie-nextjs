import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { PopularMoviesResponse } from '@/core/entities/Movie';
import { setPopularMovies } from '@/app/state/movieSlice';
import config from '@/config/config';

function usePopularMovies() {
  const dispatch = useDispatch();
  const movies = useSelector((state: any) => state.movie.popularMovies);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios.get<PopularMoviesResponse>(`https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}&page=${currentPage}`)
      .then((response: AxiosResponse<PopularMoviesResponse>) => {
        const responseData = response.data;
        const limitedResults = responseData.results.slice(0, 8); // Limitar a 8 resultados
        dispatch(setPopularMovies(limitedResults)); 
        setTotalPages(Math.ceil(responseData.total_results / 8)); // Ajustar el total de páginas considerando 8 resultados por página
      })
      .catch((error: AxiosError<PopularMoviesResponse>) => {
        if (error.response) {
          console.error('Error response:', error.response.data);
        } else {
          console.error('Error fetching popular movies:', error.message);
        }
      });
  }, [currentPage, dispatch]);

  return { movies, currentPage, totalPages, setCurrentPage };
}

export default usePopularMovies;
