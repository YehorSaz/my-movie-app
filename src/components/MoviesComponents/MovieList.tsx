import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";

import {MovieListCard} from "./MovieListCard";
import css from "../../styles/MovieList.module.css";
import {IGetGenre} from "../Paginate";
import {movieActions} from "../../redux/slice";


const MovieList: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer)


    const dispatch = useAppDispatch();
    const {state} = useLocation();


    useEffect(() => {
        if (state !== null) {
            const payload: IGetGenre = {
                page: state.page,
                genresId: state.id
            }
            dispatch(movieActions.getGenresById(payload))

        } else {
            dispatch(movieActions.getAll(1))
        }
    }, [dispatch, state]);


    return (


        <div className={css.container}>
            <div className={css.movieList}>

                {
                    movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)

                }

            </div>

        </div>
    );
}
export {MovieList}