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

      <div className='w-25 '>
        <ul className='list-unstyled d-flex justify-content-between links'>
          <li><NavLink to="/create" className="text-dark link">Create Event</NavLink></li>
          <li><NavLink to="/pastevents" className="text-dark link">Past Events</NavLink></li>
          <li><NavLink to="/" className="text-dark link"><i className="fa-solid fa-user"></i></NavLink></li>
        </ul>
        {/* <button className='btn' onClick={onClick}>Add Event</button> */}
      </div>

    </div>
  )
}

export default Header