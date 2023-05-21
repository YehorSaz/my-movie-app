const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';

const urls  = {
    movies: {
        movies,
        byId: (id: number): string => `/movie/${id}?language=uk-UA&`,
        byName: (name: string): string => `/search/movie?query=${name}&language=uk-UA&`,
        genres,
        byGenresId: (genresId: number, page: number): string => `${movies}?with_genres=${genresId}&page=${page}&language=uk-UA&`
    }
}

export {
    baseURL,
    urls
}