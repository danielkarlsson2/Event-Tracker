import { useEffect, useState } from 'react'
// import axios from 'axios'
import Event from './Event'

const Events = ({ events }) => {

    // useEffect(() => {
    //     fetch('http://localhost:8080/posts')
    // }, [])


  return (
      <>
        {events.map((event) => {
            <Event key={event.id} event={event} />
        })}
      </>
  )
}

export default Events 