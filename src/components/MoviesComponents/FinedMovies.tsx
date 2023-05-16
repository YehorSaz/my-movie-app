import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {getPoster} from "../../constants";
import {Link} from "react-router-dom";

interface IProps {
    movie: IMovie;
}
const FinedMovies:FC<IProps> = ({movie}) => {

    const {id, original_title, overview, poster_path} = movie;

    return (

        <Link to={`/movies/${id.toString()}`} state={id}>
            <div>
                <div>{original_title}</div>
                <div>{overview}</div>
                <img src={getPoster + poster_path} alt="poster" width={'100px'} height={'150px'}/>
            </div>
        </Link>
    );
};

export {FinedMovies}