import { bindActionCreators } from 'redux'

const initialState = []

const reducer = (state = initialState, action) => {
  console.log('loginReducer',action)
  switch (action.type) {
    case 'LOGIN':
      return {
        name:action.name, 
        username:action.username, 
        token:action.token
      };
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
}


export const userLogin = (name, username, token) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGIN',
      name:name, 
      username:username, 
      token:token
      });
  }
}

export const userLogout = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT',
      });
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      users: bindActionCreators( {userLogin, userLogout}, dispatch),
    }
  };
}

export default { reducer, mapDispatchToProps, userLogin, userLogout };