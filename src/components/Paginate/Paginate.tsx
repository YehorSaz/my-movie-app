import React, {FC, useEffect, useRef} from 'react';
import ReactPaginate from 'react-paginate';
import css from '../../styles/Paginate.module.css';

import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux/slice";


const Paginate: FC = () => {

    const dispatch = useAppDispatch();
    const page = useRef(1);
    const pageCount = 500;

    const handlePageClick = ({selected}: { selected: number }) => {
        page.current = selected + 1;
        dispatch(movieActions.getAll(page.current))
    }

    useEffect(() => {
        dispatch(movieActions.getAll(page.current))
    }, [dispatch]);


    return (

        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={10}
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