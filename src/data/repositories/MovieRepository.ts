import config from "@/config/config";
import { Movie } from "@/core/entities/Movie";
import { GetMovieDetails } from "@/core/useCases/getMovieDetails";
import { GetPopularMovies } from "@/core/useCases/getPopularMovies";
import apiClient from "@/pages/api/apiClient";

export class MovieRepository implements GetPopularMovies, GetMovieDetails {
    async getPopularMovies(page: number = 1): Promise<Movie[]> {
        const response = await apiClient.get(`/movie/popular?api_key=${config.API_KEY}&page=${page}`);
        return response.data.results;
    }

    async getMovieDetails(id: number): Promise<Movie> {
        const response = await apiClient.get(`/movie/${id}?api_key=${config.API_KEY}`);
        return response.data;
    }
}
