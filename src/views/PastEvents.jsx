import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Event from '../components/Event'
import { getEvents } from "../store/actions/eventsAction";


const PastEvents = () => {

  const dispatch = useDispatch()
  const { data: events, loading} = useSelector(state => state.events)
  const [oldEvents, setOldEvents] = useState([])

  useEffect(() => { 
    const sortedEvents = events.sort((a, b) => {
      return Date.parse(`${a.date}`) - Date.parse(`${b.date}`)
    
  })
  

  const oldEvts = sortedEvents.filter(evt => Date.parse(`${evt.date}`) < Date.now()).reverse()

  setOldEvents(oldEvts)
}, [events])

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])
  
  return (
    <div className="d-flex  justify-content-center">
      <div className="d-flex flex-column w-50 ">
         <h2 className='text-center mt-4'>Past events:</h2>
         { loading && <p>Loading...</p>}
         { oldEvents.map(event => <Event key={event.id} event={event} />)}
      
      </div>

    </div>
  )
}

export default PastEvents