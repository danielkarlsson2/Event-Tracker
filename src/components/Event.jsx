import React from "react"
import { Link } from "react-router-dom"
// import { Link } from 'react-router-dom'

const Event = ({ event }) => {


  return (
    <div className=""><Link to={`/${event.id}`}>
      <div className='d-flex post mt-4 text-dark'>
        <div className='rounded'>          
            <h3>{event.title}</h3>      
          <p>{event.body.slice(0,15)} ....</p>
        </div>
        <div className="w-25">
          <p className="me-1"><strong>{event.date}</strong></p>
          <p>{event.time}</p>
        </div>
      </div>
      </Link>  
    </div>
  )
}

export default Event