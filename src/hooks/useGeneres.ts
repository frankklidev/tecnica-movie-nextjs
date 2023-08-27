// hooks/useGenres.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '@/config/config';
import { Genre } from '@/core/entities/Movie';

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${config.API_KEY}`)
      .then(response => {
        setGenres(response.data.genres);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching genres:', error);
        setLoading(false);
      });
  }, []);

  return { genres, loading };
}

export default useGenres;
