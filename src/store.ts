import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../src/app/state/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer
  }
});
