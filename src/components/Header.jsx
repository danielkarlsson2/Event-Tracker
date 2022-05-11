import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Header = () => {

    const onClick = () => {
        console.log('click')
    }

  return (
    <div className='container header d-flex mt-3 align-items-center'>
        <Link to="/" className='navbar-brand'><h1>Event Tracker</h1></Link> 

      <div className='d-flex justify-content-between border'>
        <ul className='nav-links list-unstyled d-flex justify-content-between'>
          <li><NavLink to="/create" className="">Create Event</NavLink></li>
          <li><NavLink to="/create" className="">Past Events</NavLink></li>
        </ul>
        {/* <button className='btn' onClick={onClick}>Add Event</button> */}
      </div>
          <div className=''><i class="fa-solid fa-user"></i></div>

    </div>
  )
}

export default Header