interface MovieImdb {
    id: string;
    rating: number;
    votes: number;
}

interface MovieAwards {
    wins: number;
    nominations: number;
    text: string;
}
export interface MovieDetails {
    title: string;
    year:   number;
    rated: string;
    runtime: number;
    countries: string[];
    genres: string[];
    director: string;
    writers: string[];
    actors: string[];
    plot: string;
    poster: string;
    imdb: MovieImdb;
    awards: MovieAwards;
    type: string;
}
