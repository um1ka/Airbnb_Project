import { Link } from 'react-router-dom'
const Nav = () => {

    return(
        <div className='navbar'>
            <Link to="/reservation" >Home</Link>
            <Link to="/">Reservation</Link>
            <Link to="/confirm">Details</Link>

        </div>
    )
}
export default Nav