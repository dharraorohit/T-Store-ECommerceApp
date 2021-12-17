import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './core/Home'

const HomeRoutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default HomeRoutes;