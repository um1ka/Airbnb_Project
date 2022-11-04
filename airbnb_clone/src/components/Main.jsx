import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Reservation from './Reservation';
import Confirm from './Confirm'

export default function Main ({reservation}) {
    
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reservation" element={<Reservation reservation={reservation}/>}/>

            <Route path="/confirm" element={<Confirm/>}/>
            
        </Routes>
    )
}