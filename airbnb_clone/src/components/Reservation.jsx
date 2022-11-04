export default function Reservation ({reservation}) {
console.log(reservation)
    
    return reservation ? (
        <div>
            <h1>Reservation Page</h1>
            <div>
                {reservation?.map((reservation) =>(
                  <p>{reservation.city}</p>  
                ))}
            </div>

        </div> 
    ): <h1>Loading</h1>
}