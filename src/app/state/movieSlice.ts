import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../core/entities/Movie'; 

interface MovieState {
    popularMovies: Movie[];
    movieDetails: Movie | null;
  }
  
  const initialState: MovieState = {
    popularMovies: [],
    movieDetails: null,
  };
  
  export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
      setPopularMovies: (state: MovieState, action: PayloadAction<Movie[]>) => {
        state.popularMovies = action.payload;
      },
      setMovieDetails: (state: MovieState, action: PayloadAction<Movie | null>) => {
        state.movieDetails = action.payload;
      },
    }
  });
  
  export const { setPopularMovies, setMovieDetails } = movieSlice.actions;
  
  export default movieSlice.reducer;