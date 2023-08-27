import usePopularMovies from "@/hooks/usePopularMovies";
import { Pagination, Grid, CircularProgress } from '@mui/material'; 
import { useEffect, useState } from "react";
import { Movie } from '../../core/entities/Movie';
import MovieCard from "./MovieCard";

export default function PopularMovies() {
  const { movies, currentPage, totalPages, setCurrentPage } = usePopularMovies();

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (movies && movies.length > 0) {
      setLoading(false); 
    }
  }, [movies]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    setLoading(true);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      
      <Grid container spacing={2}>
        {movies.map((movie: Movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      <Pagination 
        count={totalPages} 
        page={currentPage} 
        onChange={handlePageChange} 
        style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }} 
      />
    </div>
  );
}
