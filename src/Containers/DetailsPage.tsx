import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {movieActions} from "../redux/slice";
import {MovieInfo} from "../components/MoviesComponents";
import axios from "axios";


const DetailsPage: FC = () => {

    const location = useLocation();
    const backDropPath = location.state.backdrop_path;

    const dispatch = useAppDispatch();

    const [lnk, setLnk] = useState();

    useEffect(() => {
        dispatch(movieActions.getById(location.state.id))

        axios({
            method: "post",
            url: "https://my-movie-app-beta.vercel.app/api",
            withCredentials: false,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            data: {
                movieId: location.state.original_title
            }
        }).then(resp => resp.data).then(resp => setLnk(resp.movieId));

    }, [dispatch, location.state]);

    const {movieDetails} = useAppSelector(state => state.movieReducer)

    return (

        <div>
            {
                movieDetails && (
                    <MovieInfo movieDetails={movieDetails} backDropPath={backDropPath} lnk={lnk}/>
                )
            }
        </div>
    );
};

export {DetailsPage}