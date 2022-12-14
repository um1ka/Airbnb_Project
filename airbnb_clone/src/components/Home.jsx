import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Confirm from './Confirm'


export default function Home (props) {
    const navigate= useNavigate()
    const location=props.location
    const person=props.person 
    const date1=props.date1
    const date2=props.date2
    
   

const destinationOptions = {
  method: 'GET',
  url: 'https://airbnb19.p.rapidapi.com/api/v1/searchDestination',
  params: {query: location , country: 'USA' },
  headers: {
    'X-RapidAPI-Key': '6534f8d41bmshc365272f6276afdp1cd116jsn007772c79a91',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
  }
};

let locationId = ''

    const [results, setResults] = useState("")

    const options = {
        method: 'GET',
        url: 'https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace',
        params: {
          id: `${locationId}`,
          display_name: location[''],
          totalRecords: '40',
          currency: 'USD',
        //   adults: `${person['person']}`,
        //   checkin: `${date1['date']}`,
        //   checkout: `${date2['date']}`
        },
        headers: {
          'X-RapidAPI-Key': '6534f8d41bmshc365272f6276afdp1cd116jsn007772c79a91',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };

    const getData = async () => {
        let displayName = ''

        console.log(location, date1, date2, person)

        axios.request(destinationOptions).then(function (response) {
            locationId = response.data.data[0].id
            displayName=response.data.data[0].display_name;
            console.log(displayName);
            console.log(locationId)
        })

        setTimeout(() => {
            options.params.display_name=displayName
            options.params.id=locationId
            console.log(options)
            axios.request(options).then(function (response) {
                console.log(response.data.data);
                setResults(response.data.data) 
            })
          }, "2000")
        
    }

        
    const handleSubmit = (event)=>{
        event.preventDefault()
        getData()
    }

    const handleChange =(event) =>{
         props.setLocation({...location, [event.target.id]: event.target.value });
        
        console.log(location);
       
    }

    const handlePersonChange =(event) =>{
        props.setPerson({...person, [event.target.id]: event.target.value });
    }
    
    const handleDate1Change =(event) =>{
        props.setDate1({...date1, [event.target.id]: event.target.value });
    }
    const handleDate2Change =(event) =>{
        props.setDate2({...date2, [event.target.id]: event.target.value });
    }
    

 console.log(results)
    return results? (
        <div className='poster'>
            
            <div className='space'></div>
        <form id="form">
        <h1>Find places to stay on Airbnb</h1>
        <p>Discover entire homes and private rooms perfect for any trip.</p>
           <input  type="text" placeholder="Where to"  id="location" onChange={handleChange} />
           <input  type="text" placeholder="Who" id="person" onChange={handlePersonChange}/>
           <input  type="date" placeholder="When" id="date" onChange={handleDate1Change}/>
           <input  type="date" placeholder="When" id="date" onChange={handleDate2Change}/>
           <button type="submit" onClick={handleSubmit} id="submit">Search</button>
           </form>

        <div className='cardContainer'>
           {results.map((result)=>(
           
            <div className='detailCard'>
            <a href={`/confirm/${result.id}`}><img  src={result.images[4]}/></a>
            <span><strong>Price:</strong> {result.accessibilityLabel}</span><pre></pre>
            <span><strong>Adults:</strong> {result.adults}</span><pre></pre>
            <span><strong>Ratings:</strong> {result.avgRating}</span><pre></pre>
            <span><strong>Checkin:</strong> {result.checkin}</span><pre></pre>
            <span><strong>Checkout:</strong> {result.checkout}</span><pre></pre>
            <span><strong>Address:</strong> {result.publicAddress}</span><br></br>
            <button onClick={()=>{
                document.querySelector('.btn').style.display='block'
            }}>More Details</button>
           <div className='btn'> 
               <Confirm result={result} /> 
           </div>

            
            </div>
            
           
           ))}
        </div>
        </div>

       
    ):
    <div className='poster'>
         <div className='space'></div>
        <form id="form">
        <h1>Find places to stay on Airbnb</h1>
        <p>Discover entire homes and private rooms perfect for any trip.</p>
           <input value={location[""]} type="text" placeholder="Where to" onChange={handleChange} />
           <input value={person[""]} type="text" placeholder="Who" id="person" onChange={handlePersonChange}/>
           <input value={date1[""]} type="date" placeholder="When" id="date1" onChange={handleDate1Change}/>
           <input value={date2[""]} type="date" placeholder="When" id="date2" onChange={handleDate2Change}/><pre></pre>
           <button type="submit" onClick={handleSubmit} id="submit">Search</button>
           </form>
    </div>
}
