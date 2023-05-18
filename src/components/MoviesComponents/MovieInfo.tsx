import React, {FC} from 'react';

import {getBackDrop, getPoster, urls} from "../../constants";
import {IMovieDetails} from "../../interfaces";
import css from '../../styles/MovieInfo.module.css';


interface IProps {
    movieDetails: IMovieDetails;
    backDropPath: IMovieDetails;
}

const MovieInfo: FC<IProps> = ({movieDetails, backDropPath}) => {
    console.log(backDropPath, '---------');

    const {original_title, overview, poster_path} = movieDetails;

    return (

        <div className={css.wrapper} style={{backgroundImage: `url(${getBackDrop + backDropPath})`}}>
            <div className={css.background_filter}>
                <div>

                    <div>
                        <div>{original_title}</div>
                        <div>{overview}</div>
                        <img src={getPoster + poster_path} alt="poster" width={'150px'} height={'200px'}/>
                    </div>


                </div>
        </div>
</div>
    );
};

export {MovieInfo}