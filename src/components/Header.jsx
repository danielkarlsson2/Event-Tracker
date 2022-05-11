import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Header = () => {

    const onClick = () => {
        console.log('click')
    }

  return (
    <div className='container center header d-flex'>
        <Link to="/" className='navbar-brand'><h1>Event Tracker</h1></Link> 

        <ul className='nav-links'>
          <li><NavLink to="/create" className="nav-link">Add Event</NavLink></li>
        </ul>
        <button className='btn' onClick={onClick}>Add Event</button>
    </div>
  )
}

export default Header