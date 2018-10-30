const initialState = []

const reducer = (state = initialState, action) => {
  console.log('userReducer',action)
  switch (action.type) {
    case 'ADD_USERS':
      return state.concat(action.users)
    default:
      return state
  }
}


export const addUsers = (users) => {
  return async (dispatch) => {
    dispatch({
      type: 'ADD_USERS',
      users: users
      });
  }
}

export default { reducer };