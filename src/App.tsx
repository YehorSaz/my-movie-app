import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {DetailsPage, GenrePage, MoviePage} from "./Containers";
import {Header} from "./components/Header";
import {MovieList} from "./components/MoviesComponents";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviePage/>}/>
                <Route path={'/:title/:id'} element={<DetailsPage/>}/>
                <Route path={'genres'} element={<GenrePage/>}>
                    <Route path={':name'} element={<MovieList/>}/>
                </Route>
            </Routes>
        </>
    );

}

export default App;
