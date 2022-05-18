import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addEvent } from '../store/actions/eventsAction'
import { useNavigate } from 'react-router-dom'

const CreateView = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loading = useSelector(state => state.events.loading)
    const [addedEvent, setAddedEvent] = useState(false)
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

    // const [title, setTitle] = useState()
    // const [body, setBody] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        dispatch(addEvent(formData))
        setAddedEvent(true)
    }
    useEffect(() => {
        if(!loading && addEvent) {
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
                    </div>
                    <div className="text-center mt-3 mb-3 d-flex justify-content-center">
                        <label htmlFor="body" className='me-3'>Task:</label>
                        <textarea name="body" id="body" className='w-75 rounded border-1 p-2' onChange={onChange} value={formData.body}></textarea>
                    </div>

                </div>


                <div className="d-flex justify-content-around w-100 mb-3 mt-4">
                    <div className="date">
                        <label htmlFor="date" className='me-3 '>Date:</label>
                        <input type="date" name='date' id='date' onChange={onChange} value={formData.date} className='rounded border-1 p-1'/>

                    </div>
                    <div className="time">
                        <label htmlFor="time" className='me-2'>Time:</label>
                        <input type="time" name='time' id='time' className='rounded border-1 p-1'  />

                    </div>
                </div>


            </div>

                <button className='btn btn-warning mb-4 mt-3'>{ loading ? 'Create...' : 'Create Event'}</button>




        </div>
    </form>
  )
}

export default CreateView