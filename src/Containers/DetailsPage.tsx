import React, {FC, useEffect} from 'react';

import {useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux/slice";
import {MovieListCard} from "../components/MoviesComponents";



const DetailsPage: FC = () => {

    const location = useLocation();
    console.log(location.state);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById(location.state))
    }, [dispatch]);

    const {movieDetails, finedMovies} = useAppSelector(state => state.movieReducer)
    console.log(finedMovies);
    return (

        <div>

            details page 123
            {
                movieDetails && (
                    <MovieListCard movieDetails={movieDetails}/>
                )
            }
        </div>
    );
};

export {DetailsPage}