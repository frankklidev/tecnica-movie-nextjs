import { Movie } from '../entities/Movie';

export interface GetPopularMovies {
    getPopularMovies(): Promise<Movie[]>;
}