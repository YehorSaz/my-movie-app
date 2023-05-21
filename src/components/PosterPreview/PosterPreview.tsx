import React, {FC, useState} from 'react';

import css from '../../styles/PosterPreview.module.css';
import {getBackDrop} from "../../constants";

interface IProps {
    poster: string;
}

const PosterPreview: FC<IProps> = ({poster}) => {

    const [toggle, setToggle] = useState(false);

    return (

        <div className={css.wrapper} onClick={() => setToggle(!toggle)}>

            <div className={toggle ? css.poster_preview : css.hide} onClick={() => setToggle(!toggle)}>
                <img src={getBackDrop + poster} alt="poster"/>
            </div>

        </div>
    );
};

export {PosterPreview}