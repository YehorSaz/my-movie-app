import React from 'react';
import {useLocation} from "react-router-dom";

import css from '../styles/GenresPage.module.css';
import {GenresList} from "../components/Genres";
import {MovieList} from "../components/MoviesComponents";
import {Paginate} from "../components/Paginate";


const GenrePage = () => {

    const {state} = useLocation();
    return (

        <>
            <div className={css.body}>

                <GenresList/>

                <div className={css.top}>

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

                <div className={css.bottom}>

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