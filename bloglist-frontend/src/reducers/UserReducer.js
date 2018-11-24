import { bindActionCreators } from 'redux'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return state.concat(action.users)
    case 'SET_USERS':
      return action.users
    default:
      return state
  }
}


export const addUsers = (users) => {
  return async (dispatch) => {
    dispatch({
      type: 'ADD_USERS',
      users: users
    })
  }
}
export const setUsers = (users) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_USERS',
      users: users
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      users: bindActionCreators( {addUsers,setUsers}, dispatch),
    }
  }
}

export default { reducer,mapDispatchToProps }