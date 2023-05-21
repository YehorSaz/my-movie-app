import React, {FC} from 'react';

import css from '../../styles/Search.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {FinedMovies} from "../MoviesComponents";

const Search: FC = () => {

    const dispatch = useAppDispatch();
    const {trigger, finedMovies} = useAppSelector(state => state.movieReducer);


    return (

        <div className={trigger ? css.Search : css.active} onClick={() => {
            dispatch(movieActions.changeTrigger())
            document.querySelector<HTMLInputElement>('#search').value = ''
        }}>
            <div className={css.content} onClick={event => event.stopPropagation()}>

                {
                    finedMovies.length ?
                    finedMovies.map(movie => <FinedMovies key={movie.id} movie={movie}/>)
                        :
                    <div className={css.nothing}>nothing yet... <br/> start typing...</div>
                }
            </div>

        </div>
    );
};

export {Search}