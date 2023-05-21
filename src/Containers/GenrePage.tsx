import React from 'react';

import css from '../styles/GenresPage.module.css';
import {GenresList} from "../components/Genres";
import {MovieList} from "../components/MoviesComponents";
import {Paginate} from "../components/Paginate";
import {useLocation} from "react-router-dom";



const GenrePage = () => {

    const {state} = useLocation();
    return (

        <>
            <div className={css.body}>

                <GenresList/>

                <div>
                    <div className={css.paginate}>
                        {
                            state && (<h1 className={css.name}>{state.name}</h1>)
                        }
                    </div>

                    <div className={css.paginate_numbers}>
                        <Paginate/>
                    </div>
                </div>

                <MovieList/>

                <div>
                    <div className={css.paginate}>
                        {
                            state && (<h1 className={css.name}>{state.name}</h1>)
                        }
                    </div>

                    <div className={css.paginate_numbers}>
                        <Paginate/>
                    </div>
                </div>

            </div>
        </>
    );
};

export {GenrePage}