import { MovieDetails } from './movies-details';

export interface GenreMovieDetails {
    genre: string;
    moviesCount: number;
    moviesSelected: MovieDetails[];
}

export interface GenresMoviesState {
    movieDetails: GenreMovieDetails[];
    loading: boolean;
    loaded: boolean;
}
