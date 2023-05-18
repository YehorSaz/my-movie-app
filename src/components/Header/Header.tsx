import React, {FC} from 'react';

import css from '../../styles/Header.module.css';
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {Search} from "../SearchComponent";
import {Link} from "react-router-dom";
import {TbListSearch} from "react-icons/tb";
import {FaUserCircle} from "react-icons/fa";



const Header: FC = () => {

    const dispatch = useAppDispatch();


    const search = () => {

        const name: string = document.querySelector<HTMLInputElement>('#search').value;
        dispatch(movieActions.findByName(name))
    }
    const clear = () => {
        document.querySelector<HTMLInputElement>('#search').value = '';
    }
    return (

        <div className={css.Header}>

            <Link to={'/'} className={css.link}>
                <div className={css.logo}>
                    <img className={css.img_okten} src="https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp" alt="logo"/>
                    <h3 className={css.text}>okten cinema</h3>
                </div>
            </Link>

            <div className={css.genres}>
                genres
            </div>

            <div className={css.search}>
                <input className={css.input} id={'search'} type="text" placeholder={'find movie...'} onClick={() => {
                    dispatch(movieActions.changeTrigger())
                    clear()
                }} onKeyDown={() => {
                    search()
                }}/>
                <button className={css.button} onClick={() => {
                    search()
                    dispatch(movieActions.changeTrigger())
                }}>
                    <TbListSearch/>
                </button>
            </div>

            <div className={css.search_component}>
                <Search/>
            </div>
            <div className={css.user}>
                <FaUserCircle/>
                username
            </div>

        </div>
    );
};

export {Header}