import { CALL_API } from './middleware/api'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const USERS_REQUEST = 'USERS_REQUEST'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_FAILURE = 'USERS_FAILURE'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  localStorage.setItem('token', user.token)
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `username=${creds.username}&password=${creds.password}`
  }
  return dispatch => {
    dispatch(requestLogin(creds));

    return fetch('http://localhost:3000/api/authenticate', config)
      .then(response =>
        response.json().then(data => ({data, response}))
      ).then(({data, response}) => {
        if (!response.ok) {
          dispatch(loginError(data.message))
          return Promise.reject(data)
        } else {
          dispatch(receiveLogin(data))
        }
      }).catch(err => console.log('Error: ', err)) //TODO: Add error notifications
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token')
    dispatch(receiveLogout())
  }
}

export function fetchUsers() {
  return {
    [CALL_API] : {
      endpoint: 'users',
      authenticated: true,
      types: [USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE]
    }
  }
}
