import React from "react"
// import { Link } from 'react-router-dom'

const Event = ({ event }) => {


  return (
    <div className='post d-flex'>
      <div className='info'>
        <h3>{event.title}</h3>        
        <p>{event.body}</p>
      </div>
      <div className="time">
        <p>{event.date}</p>
      </div>
    </div>
  )
}

export default Event