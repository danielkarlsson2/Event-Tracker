import axios from 'axios'
import actiontypes from '../actiontypes'

export const registerUser = (user) => {
    return dispatch => {
      dispatch(loading())
      axios.post('http://localhost:8080/users', user)
        .then(res => {
          
          dispatch(authSuccess(res.data.accessToken))
        })
        .catch(err => dispatch(authFailure(err.message)))
    }
  }

  export const loginUser = user => {
    return dispatch => {
      dispatch(loading())
      axios.post('http://localhost:8080/login', user, dispatch)
      .then(res => {
        
        dispatch(authSuccess(res.data.accessToken))
      })
      .catch(err => dispatch(authFailure(err.message)))
    }
  }

  export const logoutUser = () => {
    return {
      type: actiontypes().auth.logout
    }
  }

  const loading = () => {
    return {
      type: actiontypes().auth.loading
    }
  }
  const authFailure = (err) => {
    return {
      type: actiontypes().auth.authFailure,
      payload: err
    }
  }
  
  const authSuccess = token => {
    return {
      type: actiontypes().auth.authSuccess,
      payload: token
    }
  }