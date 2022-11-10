import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Reservation from './Reservation';
import Confirm from './Confirm'

export default function Main ({reservation, setLocation, setPerson, setDate1, setDate2, location, person, date1, date2}) {
    
    return(
        <Routes>
            <Route path="/reservation" element={<Reservation reservation={reservation}/>}/>
            <Route path="/" element={<Home setLocation={setLocation} setPerson={setPerson} setDate1={setDate1} setDate2={setDate2} location={location} person={person} date1={date1} date2={date2}/>}/>
            <Route path="/confirm/:id" element={<Confirm/>}/>
        </Routes>
    )
}
