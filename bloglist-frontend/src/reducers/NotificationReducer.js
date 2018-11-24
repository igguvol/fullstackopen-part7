
const initialState = {message:null}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return {...state,message:action.message,style:action.style}
    case 'CLEAR_NOTIFICATION':
      return {...state,message:'',style:''}
    default:
      return state
  }
}


export const setNotification = (message,style='error') => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message: message,
      style:style

    });
    if ( message !== undefined && message !== null && message !== '' )
    {
      const k = setTimeout(() => {
        dispatch({
          type: 'CLEAR_NOTIFICATION',
          });
        }, 10000);
    }
  }
}

export default { reducer, setNotification };