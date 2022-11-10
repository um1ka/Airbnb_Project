import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export default function Confirm ({result}) {
    
    // const {id} = useParams()
    // console.log(id)

    // const [detail,  setDetail] = useState(null)
    // useEffect(()=>{
    //     let confirm = props.location?.find(spot => spot.id == parseInt(id))
    //     console.log(confirm)
    //     setDetail(confirm)
    // },[props.location, id] )


    // console.log(detail)
    return (
        <div>
            <h3>Details</h3>
                <span><strong>City:</strong> {result.city}<br></br></span><pre></pre>
                <span><strong>Room Type:</strong> {result.roomType}</span><pre></pre>
                <span><strong>Location:</strong> {result.title}</span><pre></pre>
                <span><strong>Bathroom:</strong> {result.listingBathroomLabel}</span><pre></pre>
                <span><strong>Beds:</strong> {result.listingBedLabel}</span>
        </div>
                    
        
        )
    }
