import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {getPosterSmall} from "../../constants";
import css from "../../styles/MovieListCard.module.css"


interface IProp {
    movie: IMovie
}

const MovieListCard: FC<IProp> = ({movie}) => {

    const {title, id, poster_path, overview, vote_average, release_date} = movie;


    return (


        <Link to={`/${title}/${id.toString()}`} state={{...movie}}>
            <div className={css.Movie}>

                <div className={css.inner}>

                    <div className={css.poster_title}>

                        <img className={css.img_movie} src={getPosterSmall + poster_path} alt="poster"/>

                        <span className={css.span}>

                            <div className={css.title}>
                                {title}
                            </div>

                            <div className={css.votes}>
                                average: {vote_average}
                            </div>


                            <div className={css.rating}>
                                <div className={css.rating_body}>
                                    <div className={css.rating_active} style={{width: vote_average / 0.1 + '%'}}></div>
                                </div>
                            </div>

                            <div className={css.release}>{release_date}</div>

                            <div className={css.overview}>
                                {overview}
                            </div>

                        </span>

                    </div>


                </div>
            </div>
        </Link>
    );
};

export {MovieListCard}
