import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { getEvent } from '../store/actions/eventAction'

const EventDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { data: event } = useSelector(state => state.event)

    useEffect(() => {
        dispatch(getEvent(id))
        
    }, [dispatch, id])     
   



  return (
    <div className="container d-flex justify-content-center mt-4">
        <div className='single-post w-50'>

          <div className="info-text d-flex justify-content-between align-items-center">
                <div className='info'>
                  <h3>{event.title}</h3>        
                  <p className="mt-4 w-75">{event.body}</p>
                </div>
                <div className="time">
                  <p>{event.date}</p>
                </div>

          </div>
            <div className="">
              <button className="btn btn-warning float-end">Finish</button>
            </div>
        </div>

    </div>
  )
}

export default EventDetails