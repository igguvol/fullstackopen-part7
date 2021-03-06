import { createStore, combineReducers, bindActionCreators, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/UserReducer'
import blogReducer from './reducers/BlogReducer'
import notificationReducer from './reducers/NotificationReducer'
import loginReducer from './reducers/LoginReducer'

const reducer = combineReducers({
  users: userReducer.reducer,
  blogs: blogReducer.reducer,
  notification: notificationReducer.reducer,
  login: loginReducer.reducer
})

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      users: bindActionCreators(userReducer.mapDispatchToProps(), dispatch),
      blogs: bindActionCreators(blogReducer.mapDispatchToProps(), dispatch),
      //notifications: bindActionCreators(notificationReducer.mapDispatchToProps(), dispatch)
      //login: bindActionCreators(loginReducer.mapDispatchToProps(), dispatch)
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store