import React, {FC} from 'react';

import css from '../../styles/Header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {Search} from "../SearchComponent";


const Header: FC = () => {

    const dispatch = useAppDispatch();
    const {finedMovies} = useAppSelector(state => state.movieReducer);
    console.log(finedMovies);
    const search = () => {

        const name: string = document.querySelector<HTMLInputElement>('#search').value;
        dispatch(movieActions.findByName(name))
    }

    return (

        <div className={css.Header}>
            <div className={css.logo}>logo</div>
            <div className={css.search}>
                <input id={'search'} type="text" placeholder={'search...'}/>
                <button onClick={() => {
                    search()
                    dispatch(movieActions.changeTrigger())
                }}>button
                </button>
            </div>

            <Search/>

        </div>
    );
};

export {Header}