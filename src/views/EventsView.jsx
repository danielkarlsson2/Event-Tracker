import { useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Event from '../components/Event'
import { getEvents } from '../store/actions/eventsAction'



const EventsView = () => {

  const dispatch = useDispatch()
  const { data: events, loading } = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className=''>
      { loading && <p>Loading...</p>}
        { events.map(event => <Event key={event.id} event={event}/>)}
    </div>
  )
}

export default EventsView