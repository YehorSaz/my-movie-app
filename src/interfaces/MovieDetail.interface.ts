import {IGenres} from "./Genres.interface";

export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | {};
    budget: number;
    genres: IGenres[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    release_date: number;
    revenue: 8268889;
    runtime: number | null;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: string;
    vote_count: string;
}