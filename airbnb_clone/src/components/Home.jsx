import { useState } from 'react'
import axios from 'axios'


export default function Home (props) {
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
        <div>
            
        <h1>I am Home</h1>
        <form id="form">
           <input value={location[""]} type="text" placeholder="Where to" onChange={handleChange} />
           <input value={person[""]} type="text" placeholder="Who" id="person" onChange={handlePersonChange}/>
           <input value={date1[""]} type="date" placeholder="When" id="date" onChange={handleDate1Change}/>
           <input value={date2[""]} type="date" placeholder="When" id="date" onChange={handleDate2Change}/>
           <button type="submit" onClick={handleSubmit} id="submit">Search</button>
           </form>

    
           {results.map((result)=>(
           
            <div>
            <p>Address: {result.publicAddress}</p>
            <img src={result.images[4]}/>
           
            </div>
            
            
           ))}
        
        </div>

       
    ):<div>
          <h1>I am Home</h1>
        <form id="form">
           <input value={location[""]} type="text" placeholder="Where to" onChange={handleChange} />
           <input value={person[""]} type="text" placeholder="Who" id="person" onChange={handlePersonChange}/>
           <input value={date1[""]} type="date" placeholder="When" id="date" onChange={handleDate1Change}/>
           <input value={date2[""]} type="date" placeholder="When" id="date" onChange={handleDate2Change}/>
           <button type="submit" onClick={handleSubmit} id="submit">Search</button>
           </form>
    </div>
}
