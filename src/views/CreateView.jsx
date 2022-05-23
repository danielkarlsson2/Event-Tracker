import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'

const CreateView = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loading = useSelector(state => state.events.loading)
    const [addedEvent, setAddedEvent] = useState(false)
    
    const [error, setError] = useState(false)
    const [errorTask, setErrorTask] = useState(false)
    const [dateError, setDateError] = useState("")

    const [formData, setFormData] = useState({
        title: '',
        body: '',
        date: '',
        time: ''
    })
    const onChange = e => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
            
        }))         

    }
     

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = []

        if(formData.title.trim() === '') {
            setError(true)
            errors.push(false)
            return 
        }
        if(formData.body.trim() === '') {
            setErrorTask(true)
            return
        }
        if(formData.date.trim() === '') {
            setDateError("You need to enter a date and time")
            return
        } else {
            setDateError("")
        }

        // else if(formData.body.trim() === '') {
        //     setError(true)
        //     return
        // }
        
        if(errors.includes(false)) {return false}

        dispatch(addEvent(formData))
        setAddedEvent(true)
    }
  


    useEffect(() => {
        if(!loading && addedEvent) {
            navigate('/')
        }
    },[loading, addedEvent, navigate])


  return (
    <form className='d-flex justify-content-center' onSubmit={handleSubmit}>
        <div className="w-75 mt-4 border bg-light d-flex flex-column align-items-center rounded-5">
            
            <h2 className='text-center mt-3'>Create Event</h2>

            <div className="inputs d-flex flex-column w-100 align-items-center container">
                
                <div className="inputs w-100">
                    <div className="mt-3 text-center">
                        <label htmlFor="title" className='me-3'>Title:</label>
                        <input type="text" name='title' id='title' placeholder='' className='w-75 rounded border-1 p-1' onChange={onChange} value={formData.title} />
                        
                        {error && <p className='text-danger'>You have to write a title</p>}

                    </div>
                    <div className="text-center mt-3 mb-3 d-flex justify-content-center">
                        <label htmlFor="body" className='me-3'>Task:</label>
                        <textarea name="body" id="body" className='w-75 rounded border-1 p-2' onChange={onChange} value={formData.body} ></textarea>
                    </div>


                </div>
                        {errorTask && <p className='text-danger'>You have to write something to do</p>}

                {/* {error && <p className='text-danger'>You have to fill in the empty fields</p>} */}


                <div className="d-flex justify-content-around w-100 mb-3 mt-4 text-center">
                    <div className="date">
                        <label htmlFor="date" className='me-3 '>Date:</label>
                        <input type="datetime-local" name='date' id='date' onChange={onChange} value={formData.date} className='rounded border-1 p-1'/>
                    </div>
                    {/* <div className="time">
                        <label htmlFor="time" className='me-2'>Time:</label>
                        <input type="time" name='time' id='time' className='rounded border-1 p-1' onChange={onChange} value={formData.time} />

                    </div> */}
                </div>
                        <p className='text-danger'>{dateError}</p>


            </div>

                <button className='btn btn-warning mb-4 mt-3'>Create Event</button>




        </div>
    </form>
  )
}

export default CreateView