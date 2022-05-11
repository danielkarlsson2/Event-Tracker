import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";


const EventDetails = () => {
    const { id } = useParams()
    const [event, setEvent] = useState(null)
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getEvent = async () => {
            setLoading(true)
            const res = await axios.get(' http://localhost:8080/posts')
            setEvent(res.data)
            console.log('Hämtar')
            // setLoading(false)
        }

        getEvent()
    }, [id])



  return (
    <div>
        <h2>{event.id}</h2>
    </div>
  )
}

export default EventDetails