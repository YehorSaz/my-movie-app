import React, {FC} from 'react';



import {MovieList} from "../components/MoviesComponents";




const MoviePage: FC = () => {

    return (

        <div>
            <hr/>
            <MovieList/>
        </div>
    );
};

export {MoviePage}