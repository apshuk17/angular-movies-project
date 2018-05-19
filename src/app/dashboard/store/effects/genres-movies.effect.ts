import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { UserMoviesService } from '../../../services/user-movies.service';
import {
        GenresMoviesActionType,
        GenresMoviesAction,
        GenresMoviesLoading,
        GenresMoviesLoadingSuccess,
        GenresMoviesLoadingFail
    } from '../actions';
import { GenreMovieDetails } from '../states/genres-movies.state';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GenresMoviesEffect {
    constructor(private action$: Actions, private userService: UserMoviesService) {}

    @Effect()
    loadGenreMovies$ = this.action$.ofType(GenresMoviesActionType.GENRES_MOVIES_LOADING)
    .pipe(
        switchMap((action: GenresMoviesLoading) => {
            return this.userService.getGenresMoviesData().pipe(
                map((res: GenreMovieDetails[]) => {
                    return new GenresMoviesLoadingSuccess(res);
                }),
                catchError(ex => {
                    console.log(ex);
                    return of(new GenresMoviesLoadingFail());
                })
            );
        })
    );
}
