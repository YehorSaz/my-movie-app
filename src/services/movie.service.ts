import {IRes} from "../types";
import {IMovieDetails, IResult} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const movieService = {
    getAll:(): IRes<IResult> => axiosService.get(`${urls.movies.movies}?`),
    getById:(id:number): IRes<IMovieDetails> => axiosService.get(urls.movies.byId(id)),
    findByName:(name: string): IRes<IResult> => axiosService.get(urls.movies.byName(name))
}



export {
    movieService
}