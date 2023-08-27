import { Movie } from '../entities/Movie';

export interface GetMovieDetails {
    getMovieDetails(id: number): Promise<Movie>;
}