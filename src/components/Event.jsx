import { useDispatch } from 'react-redux';
// import { addEvent } from '../store/actions/eventAction';

const Event = ({ posts }) => {

  const dispatch = useDispatch()

  return (
    <div className='container post d-flex'>
      <div className='info'>
        {/* <h3>{event.title}</h3> */}
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
      </div>
      <div className="time">
        <p>12:45</p>
      </div>
    </div>
  )
}

export default Event