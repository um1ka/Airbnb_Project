import Nav from './components/Nav'
import Main from './components/Main'
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
const API_KEY = process.env.API_KEY

function App() {

  

  const [reservation, setReservation] = useState(null) 
  const [location, setLocation] = useState("")
  const [person, setPerson] = useState("")
  const [date1, setDate1] = useState("")
  const [date2, setDate2] = useState("")


 
  
  const options = {
    method: 'GET',
    url: 'https://airbnb19.p.rapidapi.com/api/v1/searchProperty',
    params: {category: 'TAB_8225', totalRecords: '10', currency: 'USD', adults: '1'},
    headers: {
      'X-RapidAPI-Key': '6534f8d41bmshc365272f6276afdp1cd116jsn007772c79a91',
      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
    }
  };
  
  


  useEffect(() => {
  
    const getData = async () => {
      axios.request(options).then(function (response) {
        console.log(response.data.data);
        setReservation(response.data.data)
        console.log(reservation)


  }).catch(function (error) {
    console.error(error);
  });
    }
    getData()
  }, [])

 


    return (
    <div className="App">
      <header className="App-header">
          <Nav />
      </header>
      <main>
      <Main  reservation={reservation}
             location={location} 
             setLocation={setLocation}
             person={person}
             setPerson={setPerson}
             date1={date1}
             setDate1={setDate1}
             date2={date2}
             setDate2={setDate2}
            
                    />
      </main>
      
    </div>
  );
}

export default App;
