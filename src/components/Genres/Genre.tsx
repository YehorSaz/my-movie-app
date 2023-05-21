import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from '../../styles/Genre.module.css';
import {IGenres} from "../../interfaces";



interface IProps {
    genre: IGenres
}

const Genre: FC<IProps> = ({genre}) => {


    const {name} = genre;

    return (

        <div className={css.name}>
            <Link to={name.toString()} state={{...genre}}>
                <div className={css.name_link}>{name}</div>
            </Link>
        </div>
    );
};

export {Genre}