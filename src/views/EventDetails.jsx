import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { getEvent } from '../store/actions/eventAction'

const EventDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    
    const { data: event } = useSelector(state => state.event)
    const date = new Date(event.date)

    function leadingZeros(date) 
      { 
        return (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
      }
    
    useEffect(() => {
        dispatch(getEvent(id))
        
    }, [dispatch, id])     
   
    
    console.log(date.getMinutes())

  return (
    <div className="container d-flex justify-content-center mt-5">
        <div className='single-post w-50'>

          <div className="info-text d-flex justify-content-between align-items-center">
                <div className='info w-100 mt-3'>
                  <h3>{event.title}</h3>        
                  <p className="mt-4 w-50">{event.body}</p>
                </div>

                <div className="side w-50 mt-3">
                    <div className="time ">
                        <p className="me-1"><strong>{date.toLocaleDateString()}</strong></p>
                        <p>{date.getHours()}:{leadingZeros(date)}</p>                       
                  
                    </div>                 
                </div>
          </div>
        </div>

    </div>
  )
}

export default EventDetails