export default function Reservation ({reservation}) {
console.log(reservation)
    
    return reservation ? (
        <div className="card">
            <h1>Search</h1>
            <ul>
                <div className="cardContainer">
                {reservation?.map((reservation) =>(
                  <li>
                      <img src={reservation.images[1]}></img>
                        <h3>Address: {reservation.publicAddress}</h3>
                        <h3>Price: {reservation.accessibilityLabel}</h3>
                        <h3>Bedroom: {reservation.beds}</h3>
                        <h4>Checkin Date:{reservation.checkin}</h4>
                        <h4>Checkout Date: {reservation.checkout}</h4>
                  
                  </li>
            
                ))}
                </div>
            </ul>

        </div> 
    ): <h1>Loading</h1>
}