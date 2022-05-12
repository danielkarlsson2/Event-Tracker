import React from 'react'

const CreateView = () => {
  return (
    <form>
        <div className="container mt-4 border bg-light d-flex flex-column align-items-center">
            
            <h2 className='text-center'>Create Event</h2>

            <div className="inputs d-flex flex-column w-75 align-items-center">
                
                <div className="inputs border w-50">
                    <div className="mt-3 text-center">
                        <label htmlFor="title" className='me-3'>Title:</label>
                        <input type="text" id='title' placeholder='' className='w-75 rounded border-1 p-1'/>
                    </div>
                    <div className="text-center mt-3 mb-3 d-flex justify-content-center">
                        <label htmlFor="body" className='me-3'>Task:</label>
                        <textarea name="" id="body" className='w-75 rounded border-1 p-2'></textarea>
                    </div>

                </div>


                <div className="d-flex justify-content-around  w-50 mb-3">
                    <div className="date">
                        <label htmlFor="date" className='me-3 '>Date:</label>
                        <input type="date" id='date' className='rounded border-1 p-1'/>

                    </div>
                    <div className="time">
                        <label htmlFor="time">Time:</label>
                        <input type="time" id='time' className='rounded border-1 p-1' />

                    </div>
                </div>


            </div>

                <button className='btn btn-warning'>Create</button>




        </div>
    </form>
  )
}

export default CreateView