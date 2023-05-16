import React, {FC} from 'react';
import {Header} from "../components/Header";
import {MoviePage} from "../Containers";


const MainLayout: FC = () => {


    return (

        <div>
            <MoviePage/>
        </div>
    );
};

export {MainLayout}