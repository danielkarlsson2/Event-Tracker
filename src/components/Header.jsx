import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../store/actions/authAction'

const Header = () => {

  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.auth.token)

  return (
    <div className='container header d-flex mt-3 align-items-center'>
        <Link to="/" className='navbar-brand'><h1>Event Tracker</h1></Link> 

      <div className='nav-links'>
        <ul className='list-unstyled d-flex justify-content-between links'>
          <li><NavLink to="/create" className="text-dark link">Create Event</NavLink></li>
          <li><NavLink to="/pastevents" className="text-dark link">Past Events</NavLink></li>

          { isAuth
          ? (<>
             <li><Link to="/login " onClick={() => dispatch(logoutUser())} className="text-dark link">Logout</Link></li>
             </>)

            : <li><NavLink to="/login" className="text-dark link">Login</NavLink></li>
          }
        </ul>
        
      </div>

    </div>
  )
}

export default Header