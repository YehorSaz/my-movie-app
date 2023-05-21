import {IRes} from "../types";
import {IGenres, IMovieDetails, IResult} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IGetGenre} from "../components/Paginate";

const movieService = {
    getAll: (page?: number): IRes<IResult> => axiosService.get(`${urls.movies.movies}?page=${page ? page : 1}&language=uk-UA&`),
    getById: (id: number): IRes<IMovieDetails> => axiosService.get(urls.movies.byId(id)),
    findByName: (name: string): IRes<IResult> => axiosService.get(urls.movies.byName(name)),
    getGenres: (): IRes<IGenres> => axiosService.get(`${urls.movies.genres}?language=uk-UA&`),
    getGenresById: (payload:IGetGenre): IRes<IResult> => axiosService.get(`${urls.movies.byGenresId(payload.genresId ? payload.genresId : 1, payload.page)}`)
}


export {
    movieService
}