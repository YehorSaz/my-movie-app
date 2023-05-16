import React, {FC} from 'react';
import {getPoster} from "../../constants";
import {IMovieDetails} from "../../interfaces";

interface IProps {
    movieDetails: IMovieDetails;
}

const MovieListCard: FC<IProps> = ({movieDetails}) => {

    const {original_title, overview, poster_path} = movieDetails;

    return (

        <div>
            Movie Card
            <div>

                <div>
                    <div>{original_title}</div>
                    <div>{overview}</div>
                    <img src={getPoster + poster_path} alt="poster" width={'150px'} height={'200px'}/>
                </div>




            </div>
        </div>
    );
};

export {MovieListCard}