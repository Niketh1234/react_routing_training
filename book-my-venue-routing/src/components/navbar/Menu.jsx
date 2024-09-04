import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Menu = () => {
    const navigate = useNavigate();
   
  return (
    <div className='menu-container'>
        <h1>Book My Venue</h1>
        <ul>
            <li> <Link to="/book-slot">
                Bookings
            </Link>
            </li>
            <li> <Link to="/login-page">
                Login
            </Link>
            </li>
            <li onClick={()=> navigate('/add-property')}>
                Add Property
            </li>
        </ul>
    </div>
  )
}

export default Menu