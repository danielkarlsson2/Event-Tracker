import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Events from '../components/Events'
import EventsView from './EventsView'

const Views = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<EventsView /> } />
            {/* <Route path='/' element={<Events /> } /> */}
        </Routes>
    </div>
  )
}

export default Views