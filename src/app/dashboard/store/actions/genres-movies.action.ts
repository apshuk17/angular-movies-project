import { Action } from '@ngrx/store';
import { MovieDetails } from '../states';
import { GenreMovieDetails } from '../states';

export enum GenresMoviesActionType {
    GENRES_MOVIES_LOADING = '[Genres Movies] Genres Movies Loading',
    GENRES_MOVIES_LOADING_SUCCESS = '[Genres Movies] Genres Movies Loading Success',
    GENRES_MOVIES_LOADING_FAIL = '[Genres Movies] Genres Movies Loading Fail',

}

export class GenresMoviesLoading implements Action {
    readonly type = GenresMoviesActionType.GENRES_MOVIES_LOADING;
}

export class GenresMoviesLoadingSuccess implements Action {
    readonly type = GenresMoviesActionType.GENRES_MOVIES_LOADING_SUCCESS;
    constructor(public payload: GenreMovieDetails[]) {}
}

export class GenresMoviesLoadingFail implements Action {
    readonly type = GenresMoviesActionType.GENRES_MOVIES_LOADING_FAIL;
}

export type GenresMoviesAction = GenresMoviesLoading | GenresMoviesLoadingSuccess | GenresMoviesLoadingFail;
