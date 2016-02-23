import {combineReducers} from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE
} from './actions'


function auth(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}. state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
  }
}

function users(state = {
    isFetching: false,
    quote: '',
    authenticated: false
  }, action) {
  switch (action.type) {
    case USERS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case USERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.response,
        authenticated: action.authenticated || false
      })
    case USERS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
    }
}

const quotesApp = combineReducers({
  auth, users
})

export default quotesApp;
