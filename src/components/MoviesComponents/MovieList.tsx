import React, {FC} from 'react';

import {useAppSelector} from "../../hooks";

import {MovieListCard} from "./MovieListCard";
import css from "../../styles/MovieList.module.css";
import {Paginate} from "../Paginate";


const MovieList: FC = () => {

    const {movies} = useAppSelector(state => state.movieReducer)

    return (

        <>
            <Paginate/>
            <div className={css.container}>
                <div className={css.movieList}>

                    {
                        movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
                    }

                </div>

            <Paginate/>
            </div>
        </>
    );
}
export {MovieList}