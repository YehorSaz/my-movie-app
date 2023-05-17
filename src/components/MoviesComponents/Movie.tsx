import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {getLogo} from "../../constants";
import css from "../../styles/Movie.module.css"


interface IProp {
    movie: IMovie
}

const Movie: FC<IProp> = ({movie}) => {

    const {title, id, poster_path, overview, vote_count, vote_average} = movie;


    return (


        <Link to={id.toString()} state={id}>
            <div className={css.Movie}>

                <div className={css.inner}>
                    <div className={css.poster_title}>

                        <img className={css.img_movie} src={getLogo + poster_path} alt="poster"/>

                        <span className={css.span}>

                            <div className={css.title}>
                                {title}
                            </div>

                            <div className={css.votes}>
                                average: {vote_average}
                            </div>


                            <div className={css.rating}>
                                <div className={css.rating_body}>
                                    <div className={css.rating_active} style={{width: vote_average / 0.1 + '%' }}></div>
                                </div>
                            </div>

                        </span>

                    </div>

                    <div className={css.overview}>
                        {overview}
                    </div>


                </div>
            </div>
        </Link>
    );
};

export {Movie}
