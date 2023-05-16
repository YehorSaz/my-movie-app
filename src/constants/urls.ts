const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';

const urls  = {
    movies: {
        movies,
        byId: (id: number): string => `/movie/${id}?`,
        byName: (name: string): string => `/search/movie?query=${name}&`
    }
}

export {
    baseURL,
    urls
}