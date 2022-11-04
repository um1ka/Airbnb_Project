import { Link } from 'react-router-dom'
const Nav = () => {

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/confirm">Confirmation</Link>

        </div>
    )
}
export default Nav