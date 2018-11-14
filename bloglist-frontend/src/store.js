import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/UserReducer'
import blogReducer from './reducers/BlogReducer'

const reducer = combineReducers({
  users: userReducer.reducer,
  blogs: blogReducer.reducer
})

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      users: bindActionCreators(userReducer.mapDispatchToProps(), dispatch),
      blogs: bindActionCreators(blogReducer.mapDispatchToProps(), dispatch)
    }
  };
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store