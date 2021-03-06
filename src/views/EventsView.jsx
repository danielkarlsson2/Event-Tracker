import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Event from '../components/Event'
import { getEvents } from '../store/actions/eventsAction'


const EventsView = () => {
  
  const dispatch = useDispatch()
  const { data: events, loading } = useSelector(state => state.events)
  const [newEvents, setNewEvents] = useState([])

  useEffect(() => {
    const sortedEvents = events.sort((a, b) => {
      return Date.parse(`${a.date}`) - Date.parse(`${b.date}`)
    })

    const newEvts = sortedEvents.filter(evt => Date.parse(`${evt.date}`) > Date.now())

    setNewEvents(newEvts)
  }, [events])
 


  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className="d-flex  justify-content-center">
        <div className='d-flex flex-column w-50 '>

          <h2 className='text-center mt-4'>Upcoming events:</h2>
          { loading && <p>Loading...</p>}
            { newEvents.map(event => <Event key={event.id} event={event}/>)}
            
            {
              !newEvents.length && (
                <h3 className='text-center mt-5'>No events to show</h3>
              )
            }
            
        </div>
        

    </div>
  )
}

export default EventsView