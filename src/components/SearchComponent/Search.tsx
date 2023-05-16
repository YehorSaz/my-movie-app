import React, {FC} from 'react';
import css from '../../styles/Search.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {FinedMovies} from "../MoviesComponents";

const Search: FC = () => {

    const dispatch = useAppDispatch();
    const {trigger, finedMovies} = useAppSelector(state => state.movieReducer);


    return (

        <div className={trigger ? css.Search : css.active} onClick={() => dispatch(movieActions.changeTrigger())}>
            <div className={css.content} onClick={event => event.stopPropagation()}>
                {
                    finedMovies.map(movie => <FinedMovies key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    );
};

export {Search}