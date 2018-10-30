import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/UserReducer'

const reducer = combineReducers({
  users: userReducer.reducer
})

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      users: bindActionCreators(userReducer.mapDispatchToProps(), dispatch)
    }
  };
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store