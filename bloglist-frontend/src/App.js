import React from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import blogService from './services/blogs'
import userService from './services/users'
import loginService from './services/login'
import BlogList from './components/BlogList'
import UserList from './components/UserList'
import User from './components/User'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import NavigationMenu from './components/NavigationMenu'
import Blog from './components/Blog'
import {mapDispatchToProps}  from './store'
import Login from './components/Login'
import {setNotification} from './reducers/NotificationReducer'
import {addBlogs,setBlogs,removeBlog} from './reducers/BlogReducer'
import {addUsers,setUsers} from './reducers/UserReducer'
import {userLogin, userLogout} from './reducers/LoginReducer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '', 
      title: '',
      author: '',
      url: '',
      notification: null,
      user: null
    }
  }

  componentWillMount() {
    if (this.state.user !== null) {
      this.getBlogs();
    }

    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    console.log('::::::::: login',loggedUserJSON)
    if (loggedUserJSON && loggedUserJSON!=='undefined') {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
      userService.setToken(user.token)
      this.props.userLogin(user.name, user.username, user.token);
      this.getBlogs();
      console.log('::::::::: login',loggedUserJSON)
    }
  } 

  componentDidUpdate(prevProps) 
  {
    if ( this.props.notification !== prevProps.notification )
    {
      console.log('componentDidUpdate ', this.props.notification )
      console.log('componentDidUpdate prev ', prevProps.notification )
      //this.updateUser();
    }
  } 

  getBlogs = () => {
    blogService.getAll().then(blogs => {
      this.props.setBlogs( blogs );
    }).catch( err => {
      console.log('error ocnnc', err)
      this.props.setNotification( 'Error connecting the server 1' )
    })

    userService.getAll().then(users => {
      console.log('userS:', users)
      console.log('props:', this.props)
      console.log('componentWillMount props:',this.props)
      this.props.setUsers( users );
    }).catch( err => {
      this.props.setNotification( 'Error connecting the server 2' )
    })  
  }


  likeBlog = (id) => async () => {
    const liked = this.state.blogs.find(b=>b.id===id);
    const updated = { ...liked, likes: liked.likes + 1 };
    await blogService.update(id, updated);
    this.props.setNotification(`you liked '${updated.title}' by ${updated.author}`, 'info');
    this.setState({
      blogs: this.state.blogs.map(b => b.id === id ? updated : b)
    });
  }

  removeBlog = (id) => async () => {
    const deleted = this.props.blogs.find(b => b.id === id);
    const ok = window.confirm(`remove blog '${deleted.title}' by ${deleted.author}?`);
    if ( ok===false) {
      return
    };
    window.location.href='/';

    const resp = await blogService.remove(id)
    this.props.setNotification(`blog '${deleted.title}' by ${deleted.author} removed`, 'info');
    console.log('removeBlog:',resp)
    this.props.removeBlog(id);
  }

  addUser = async (event) => {
    //TODO:
    event.preventDefault()
  }

  addBlog = async (event) => {
    event.preventDefault()
    const blog = {
      title: this.state.title,
      author: this.state.author,
      url: this.state.url,
    }
    
    //TODO: response doesn't have user-info
    const result = await blogService.create(blog)
    this.props.addBlogs(result);
    this.props.setNotification(`blog '${blog.title}' by ${blog.author} added`, 'info')
    this.setState({ 
      title: '', 
      url: '', 
      author: '',
    })
  }

  logout = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    this.props.setNotification('logged out')
    this.setState({ user: null })
    this.props.userLogout();
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      }).catch( err => {
        //this.props.setNotification( 'Error logging in' )
      });
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
      userService.setToken(user.token)
      this.getBlogs();
      this.props.setNotification('welcome back!')
      this.setState({ username: '', password: '' });
      this.props.userLogin(user.name, user.username, user.token);
    } catch (exception) {
      this.props.setNotification('Invalid login or password', 'error')
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  handleLoginChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  
  render() {
    console.log('--- App.render')
    /*if (!this.props.login || this.props.login === undefined || this.props.login.length === 0) {
      return (
        <div>
          <Notification />
          <Login onSubmit={this.login} onChange={this.handleLoginChange} />
        </div>
      )
    }*/

    const byLikes = (b1, b2) => b2.likes - b1.likes

    console.log('App.props:',this.props);
    console.log('App.state:',this.state)
    const blogsInOrder = this.props.blogs.sort(byLikes)

    // for nav menu
    const activeStyle = { backgroundColor:'steelblue', border:'1px solid black', padding:'0.8em', color:'white', fontWeight:'bold'}
    const defaultStyle= { color:'black' }

    return (
      <Router>
        <div>
          <h3>
            Blog app
          </h3>
          <Notification />

          <Login onSubmit={this.login} onChange={this.handleLoginChange} />

          {(this.props.login && this.props.login.token) &&
            <div key='mainApp'>
              <NavigationMenu defaultStyle={defaultStyle} activeStyle={activeStyle} user={this.props.login} logout={this.logout} />
              <Route exact path='/' render={({history}) => 
                <BlogList
                    handleChange={this.handleLoginChange}
                    title={this.state.title}
                    author={this.state.author}
                    url={this.state.url}
                    addBlog={this.addBlog}
                    blogsInOrder={blogsInOrder}
                    like={this.likeBlog}
                    remove={this.removeBlog}
                />} 
              />
              <Route exact path='/blogs/:id' render={({match}) => {
                const blog = this.props.blogs.find( (a) => a.id===match.params.id );
                if ( blog )
                  return (<Blog
                      blog={blog}
                      deletable={this.props.blogs.find( (a) => (a.id===match.params.id && a.user.username===this.props.login.username) )}
                      like={this.likeBlog}
                      remove={this.removeBlog}
                    />);
                  return "loading";
                }}
              />
              <Route exact path='/users/:id'  render={({match}) => {
                let foundUser=this.props.users.find( (a) => a.id===match.params.id);
                if ( foundUser )
                  return (
                    <User id={match.params.id} 
                      user={foundUser}
                      handleChange={this.handleLoginChange} addUser={this.addUser}/>
                  );
                return "loading";
                }}
              />
              <Route exact path='/users' render={({match}) =>
                <UserList users={this.props.users} handleChange={this.handleLoginChange} addUser={this.addUser}/>
              } />
            </div>
          }
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

//export default App;
export default connect(
  (a) => a,
//  (a,b) => {console.log('mapStateToProps a: ', a );console.log('mapStateToProps b: ', b );  a.ksoak=(new Date()).getTime(); return a; },
//  mapStateToProps,
  { addUsers, setUsers, addBlogs, setBlogs, removeBlog, setNotification, userLogin, userLogout }
)(App)

