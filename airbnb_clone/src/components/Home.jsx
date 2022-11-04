import { useState } from 'react'

export default function Home (props) {
    const location=props.location
    const person=props.person 
    const date1=props.date1
    const date2=props.date2
    console.log(props)

   
    

    const handleSubmit = (event)=>{
        event.preventDefault()
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
    
    

    return (
        <div>
        <h1>I am Home</h1>
        <form id="form">
           <input value={location[""]} type="text" placeholder="Where to" onChange={handleChange} />
           <input value={person[""]} type="text" placeholder="Who" id="person" onChange={handlePersonChange}/>
           <input value={date1} type="date" placeholder="When" id="date" onChange={handleDate1Change}/>
           <input value={date2} type="date" placeholder="When" id="date" onChange={handleDate2Change}/>
           <button type="submit" id="submit">Search</button>
           </form>
        </div>
    )
}