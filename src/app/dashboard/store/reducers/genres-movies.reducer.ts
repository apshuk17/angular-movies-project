import { GenresMoviesState } from '../states';
import { GenresMoviesAction, GenresMoviesActionType } from '../actions';
import { GenreMovieDetails } from '../states';


const initialGenresMovieState: GenresMoviesState = {
    movieDetails: [],
    loading: false,
    loaded: false
};

export function reducer(
    state: GenresMoviesState = initialGenresMovieState,
    action: GenresMoviesAction
): GenresMoviesState {
    switch (action.type) {
        case GenresMoviesActionType.GENRES_MOVIES_LOADING:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case GenresMoviesActionType.GENRES_MOVIES_LOADING_SUCCESS:
            const movieDetails: GenreMovieDetails[] = action.payload;
            return {
                ...state,
                movieDetails,
                loading: false,
                loaded: true
            };
        case GenresMoviesActionType.GENRES_MOVIES_LOADING_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false
            };
    }
    return state;
}
