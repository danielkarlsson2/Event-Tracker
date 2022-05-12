import React from "react"
import { Link } from "react-router-dom"
// import { Link } from 'react-router-dom'

const Event = ({ event }) => {


  return (
    <div className=""><Link to={`/${event.id}`}>
      <div className='d-flex post mt-4 text-dark'>
        <div className='rounded'>          
            <h3>{event.title}</h3>      
          <p>{event.body.slice(0,10)} ....</p>
        </div>
        <div className="">
          <p>{event.date}</p>
        </div>
      </div>
      </Link>  
    </div>
  )
}

export default Event