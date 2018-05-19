import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../states/dashboard.state';
import { GenresMoviesState } from '../states/genres-movies.state';

// get Dashboard State
export const getDashboardState = createFeatureSelector<DashboardState>('dashboard');

// get GenreMoviesState
export const getGenresMoviesState = createSelector(
    getDashboardState,
    (state: DashboardState) => state.genresMoviesState
);

// get Genre Movie details
export const getGenreMovieDetails = createSelector(
    getGenresMoviesState,
    (state: GenresMoviesState) => state.movieDetails
);

// get loading details
export const getLoadingState = createSelector(
    getGenresMoviesState,
    (state: GenresMoviesState) => state.loading
);

// get loaded details
export const getLoadedState = createSelector(
    getGenresMoviesState,
    (state: GenresMoviesState) => state.loaded
);


