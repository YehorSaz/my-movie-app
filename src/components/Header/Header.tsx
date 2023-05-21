import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {TbListSearch} from "react-icons/tb";
import {FaUserCircle} from "react-icons/fa";

import css from '../../styles/Header.module.css';
import {useAppDispatch, useDebounce} from "../../hooks";
import {movieActions} from "../../redux/slice";
import {Search} from "../SearchComponent";





const Header: FC = () => {

    const dispatch = useAppDispatch();


    const [query, setQuery] = useState<string>("")
    const debounce = useDebounce(query, 500)


    useEffect(() => {
        if (debounce){
            dispatch(movieActions.findByName(debounce))
        }
    }, [dispatch, debounce]);




    const clear = () => {
        document.querySelector<HTMLInputElement>('#search').value = '';
    }
    return (

        <div className={css.Header}>

            <Link to={'/'} className={css.link}>
                <div className={css.logo}>
                    <img className={css.img_okten}
                         src="https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp" alt="logo"/>
                    <h3 className={css.text}>okten cinema</h3>
                </div>
            </Link>

            <div className={css.genres}>
                <Link className={css.genres_link} to={'/genres'}>
                    Жанри
                </Link>
            </div>

            <div className={css.search}>
                <input className={css.input} id={'search'} type="text" placeholder={'find movie...'} required={true} onClick={() => {
                    dispatch(movieActions.changeTrigger())
                    clear()
                }} onChange={(e) => setQuery(e.target.value)

                }/>
                <button className={css.button} onClick={() => {
                    dispatch(movieActions.findByName(debounce))
                    dispatch(movieActions.changeTrigger())
                    clear()
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