import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../store/actions/authAction'

const LoginForm = ({setLogin}) => {

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      })

      const onChange = e => {
        setFormData(state => ({
          ...state,
          [e.target.name]: e.target.value
        }))
      }
    
      const handleSub = e => {
        e.preventDefault()
        dispatch(loginUser(formData))
      }

  return (
    <div className='d-flex justify-content-center'>

        <div className='d-flex justify-content-center mt-5 bg-light w-50 border rounded-4 input-card'>
            <form className='w-50' onSubmit={handleSub} >
                <h2 className='mt-4 text-center'>Login</h2>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4 mt-4 border-bottom rounded-2 p-2">
                        <input value={formData.email} onChange={onChange} type="email" id="email" name='email' className="form-control" />
                        <label className="form-label" htmlFor="email">Email address</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4 p-2 border-bottom">
                        <input value={formData.password} onChange={onChange} type="password" id="password" name='password' className="form-control" />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>            

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-warning btn-block mb-5 mt-5" >Sign in</button>                    
                      <p className='text-center mb-2'>Are you not a member?
                      <br />
                        <span className='link text-center' onClick={() => setLogin(false)}>Register</span>
                      </p>
            </form>

        </div>
    </div>
  )
}

export default LoginForm