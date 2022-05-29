import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateView from './CreateView'
import EventDetails from './EventDetails'
import EventsView from './EventsView'
import LoginView from './LoginView'
import PastEvents from './PastEvents'

const Views = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<EventsView /> } />
            <Route path='/:id' element={<EventDetails /> } />
            <Route path='/create' element={<CreateView /> } />
            <Route path='/pastevents' element={<PastEvents /> } />
            <Route path='/login' element={<LoginView /> } />
            
            
        </Routes>
    </div>
  )
}

export default Views