import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { getEvent } from '../store/actions/eventAction'

const EventDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    
    const { data: event } = useSelector(state => state.event)
    const date = new Date(event.date)
    
    useEffect(() => {
        dispatch(getEvent(id))
        
    }, [dispatch, id])     
   
    // const handleChange = 


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
                        <p>{date.getHours()}:{date.getMinutes()}</p>
                    </div>
                    <div className="">
                      <button className="btn btn-success btn-done mb-3">Done<i class="fa-solid fa-check ms-1"></i></button>
                    </div>

                </div>

          </div>
        </div>

    </div>
  )
}

export default EventDetails