import React, {FC, useEffect} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux/slice";
import {MovieInfo} from "../components/MoviesComponents";


const DetailsPage: FC = () => {

    const location = useLocation();
    const backDropPath = location.state.backdrop_path;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById(location.state.id))
    }, [dispatch, location.state]);

    const {movieDetails} = useAppSelector(state => state.movieReducer)

    return (

        <div>
            {
                movieDetails && (
                    <MovieInfo movieDetails={movieDetails} backDropPath={backDropPath}/>
                )
            }
        </div>
    );
};

export {DetailsPage}