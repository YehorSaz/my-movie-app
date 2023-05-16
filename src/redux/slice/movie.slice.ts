import {IError, IMovie, IMovieDetails, IResult} from "../../interfaces";
import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";



interface IState {
    movies: IMovie[];
    errors: IError;
    movieDetails: IMovieDetails;
    finedMovies: IMovie[],
    trigger: boolean
}

const initialState: IState = {
    movies: [],
    errors: {},
    movieDetails: null,
    finedMovies: [],
    trigger: false
};

const getAll = createAsyncThunk<IResult, void>(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err?.response?.data)
        }
    }
);

const getById = createAsyncThunk<IMovieDetails, number>(
    'movieSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id)
            return data
        }catch (e) {
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
        }catch (e) {
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
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieDetails = action.payload
            })
            .addCase(findByName.fulfilled, (state, action) => {
                state.finedMovies = action.payload.results
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
    findByName
}

export {
    movieActions,
    movieReducer
}
