import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {getPoster} from "../../constants";
import css from "../../styles/Movie.module.css"



interface IProp {
    movie: IMovie
}
const Movie: FC<IProp> = ({movie}) => {

    const {original_title, id, poster_path, backdrop_path,} = movie;


    return (


        <Link to={id.toString()} state={id} className={css.Movie}>
            <div className={css.Movie}>
                MOVIE-------------
                <div>original_title: {original_title}</div>
                <div>id: {id}</div>
                <img src={getPoster + poster_path} alt="poster" width={'150px'} height={'200px'}/>
                <img src={getPoster + backdrop_path} alt="poster" width={'150px'} height={'100px'}/>
            </div>
        </Link>
    );
};

export {Movie}
