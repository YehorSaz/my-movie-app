import React, {FC} from 'react';

import css from '../../styles/Genre.module.css';
import {IGenres} from "../../interfaces";
import {Link} from "react-router-dom";
;


interface IProps {
    genre: IGenres
}

const Genre: FC<IProps> = ({genre}) => {


    const {name} = genre;

    return (

        <div className={css.name}>
            <Link to={name.toString()} state={{...genre}}>
                {name}
            </Link>
        </div>
    );
};

export {Genre}