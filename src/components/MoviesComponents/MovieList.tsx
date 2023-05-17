import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {Movie} from "./Movie";
import css from "../../styles/MovieList.module.css";




const MovieList: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch]);



    return (

        <div className={css.container}>
            <div className={css.movieList}>

                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }

            </div>
        </div>
    );
}
export {MovieList}