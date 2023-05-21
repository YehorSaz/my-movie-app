import React, {FC, useEffect} from 'react';

import css from '../../styles/GenresList.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {Genre} from "./Genre";


const GenresList:FC = () => {

    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch]);

    return (

        <div className={css.wrapper}>
            <div className={css.genres_name}>

                {
                    genres.map(genre => <Genre key={genre.id} genre={genre}/>)
                }

            </div>
        </div>
    );
};

export  {GenresList}