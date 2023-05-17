import React, {FC} from 'react';

import {MovieList} from "../components/MoviesComponents";
import css from '../styles/MoviePage.module.css';



const MoviePage: FC = () => {

    return (

        <div className={css.body}>
            <MovieList/>
        </div>
    );
};

export {MoviePage}