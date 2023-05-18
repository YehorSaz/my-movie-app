import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {getPosterSmall} from "../../constants";
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux/slice";
import css from '../../styles/FinedMovie.module.css';


interface IProps {
    movie: IMovie;
}

const FinedMovies: FC<IProps> = ({movie}) => {

    const dispatch = useAppDispatch();

    const {title, id, poster_path, overview, vote_count, vote_average} = movie;
    const poster = poster_path ? getPosterSmall + poster_path : 'https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp';

    return (

        <Link to={`/movies/${id.toString()}`} state={id} onClick={() => dispatch(movieActions.changeTrigger())}>

            <div className={css.wrapper}>

                <img className={css.img_fined} src={poster} alt="logo"/>

                <span className={css.info}>

                    <div className={css.title}>
                        {title}
                    </div>

                    <div className={css.rating}>
                                <div className={css.rating_body}>
                                    <div className={css.rating_active} style={{width: vote_average / 0.1 + '%'}}>
                                        {vote_count}
                                    </div>
                                </div>
                            </div>

                    <div className={css.overview}>
                        {overview}
                    </div>
                </span>

            </div>

        </Link>
    );
};

export {FinedMovies}