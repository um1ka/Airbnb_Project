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
            
            <h1>Details</h1>
            <h2>{result.city}</h2>
                     </div>
                    
        
        )
    }
