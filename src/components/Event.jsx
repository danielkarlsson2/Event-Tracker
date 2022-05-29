import React from "react"
import { Link } from "react-router-dom"

const Event = ({ event }) => {

  const date = new Date(event.date)
  
  function leadingZeros(date) 
  { 
    return (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  }

  return (
    <div className=""><Link to={`/${event.id}`}>
      <div className='d-flex post mt-4 text-dark'>
        <div className='rounded'>          
            <h3>{event.title}</h3>      
          <p>{event.body.slice(0,15)} ....</p>
        </div>
        <div className="w-25">
          <p className=""><strong>{date.toLocaleDateString()}</strong></p>
          <p>{date.getHours()}:{leadingZeros(date)}</p>
        </div>
      </div>
      </Link>  
    </div>
  )
}

export default Event