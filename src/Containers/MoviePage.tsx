import React, {FC} from 'react';

import {MovieList} from "../components/MoviesComponents";
import css from '../styles/MoviePage.module.css';
import {Paginate} from "../components/Paginate";



const MoviePage: FC = () => {

    return (

        <div className={css.body}>
            <Paginate/>
            <MovieList/>
            <div className={css.paginate_bottom}><Paginate/></div>
        </div>
    );
};

export {MoviePage}