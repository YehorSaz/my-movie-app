import {IError, IGenres, IMovie, IMovieDetails, IResult} from "../../interfaces";
import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";
import {IGetGenre} from "../../components/Paginate";
import {IVideo, IVideoRes} from "../../interfaces/Video.interface";


interface IState {
    movies: IMovie[];
    errors: IError;
    movieDetails: IMovieDetails;
    finedMovies: IMovie[],
    trigger: boolean,
    genres: IGenres[],
    total_page: number,
    video: IVideoRes[]
}

const initialState: IState = {
    movies: [],
    errors: {},
    movieDetails: null,
    finedMovies: [],
    trigger: false,
    genres: [],
    total_page: 0,
    video: []
};

const getVideos = createAsyncThunk<IVideo, number>(
    'movieSlice/getVideos',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideo(id);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
)

const getGenres = createAsyncThunk<IGenres, void>(
    'movieSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
)

const getAll = createAsyncThunk<IResult, number>(
    'movieSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
);

const getGenresById = createAsyncThunk<IResult, IGetGenre>(
    'movieSlice/getGenresById',
    async (payload, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenresById(payload);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
)


const getById = createAsyncThunk<IMovieDetails, number>(
    'movieSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const findByName = createAsyncThunk<IResult, string>(
    'movieSlice/findByName',
    async (name, {rejectWithValue}) => {
        try {
            const {data} = await movieService.findByName(name)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        changeTrigger: state => {
            state.trigger = !state.trigger
            state.finedMovies = []
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.total_page = action.payload.total_pages
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieDetails = action.payload
            })
            .addCase(findByName.fulfilled, (state, action) => {
                state.finedMovies = action.payload.results
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(getGenresById.fulfilled, (state, action) => {
                state.movies = action.payload.results
                state.total_page = action.payload.total_pages
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.video = action.payload.results
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload
            })


});

const {actions, reducer: movieReducer} = slice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    findByName,
    getGenres,
    getGenresById,
    getVideos
}

export {
    movieActions,
    movieReducer
}
