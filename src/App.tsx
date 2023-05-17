import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {DetailsPage, MoviePage} from "./Containers";
import {Header} from "./components/Header";


function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviePage/>}/>
                <Route path={'/movies/:id'} element={<DetailsPage/>}/>
            </Routes>
        </>
    );

}

export default App;
