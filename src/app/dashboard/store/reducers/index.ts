import { ActionReducerMap } from '@ngrx/store';
import { DashboardState } from '../states';
import * as fromGenreMoviesReducer from './genres-movies.reducer';


export const GenresMoviesReducer: ActionReducerMap<DashboardState> = {
    genresMoviesState: fromGenreMoviesReducer.reducer
};
