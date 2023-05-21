import React, {FC, useEffect, useRef} from 'react';
import ReactPaginate from 'react-paginate';
import {useLocation} from "react-router-dom";

import css from '../../styles/Paginate.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slice";


export interface IGetGenre {

    genresId: any,
    page: number

}

const Paginate: FC = () => {

    const {state} = useLocation();

    const {total_page} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch();

    const page = useRef(1);

    const pageCount = total_page;

    useEffect(() => {
        page.current = 1
    }, [state]);


    const handlePageClick = ({selected}: { selected: number }) => {

        page.current = selected + 1;

        if (state !== null) {
            let payload = {
                genresId: state.id,
                page: page.current
            }

            dispatch(movieActions.getGenresById(payload))
        } else {
            dispatch(movieActions.getAll(page.current))
        }
    }

    return (

        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                forcePage={page.current - 1}
                previousLabel="prev"
                containerClassName={css.paginate}
                pageLinkClassName={css.items}
                activeClassName={css.active}
                previousClassName={css.prev}
                nextClassName={css.next}
            />
        </>
    );
};

export {Paginate}