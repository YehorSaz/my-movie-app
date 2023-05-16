import {IMovie} from "./Movie.interface";

export interface IResult {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}