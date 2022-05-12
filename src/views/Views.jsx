import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateView from './CreateView'
import EventDetails from './EventDetails'
// import Events from '../components/Events'
import EventsView from './EventsView'

const Views = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<EventsView /> } />
            <Route path='/:id' element={<EventDetails /> } />
            <Route path='/create' element={<CreateView /> } />
            
        </Routes>
    </div>
  )
}

export default Views