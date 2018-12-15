import React from 'react'
import Togglable from './Togglable'
import UserForm from './UserForm'
import PropTypes from 'prop-types'

const User = (props) => (
  <div>
    <Togglable className='animButton' buttonLabel='create new'>
      <UserForm 
        handleChange={props.handleChange}
        handleSubmit={props.addUser}
      />
    </Togglable>
    <h2>{props.user.name}</h2>
    {(props.user.blogs&&props.user.blogs.length>0) ?
      <div>
        <b>Added blogs</b>
        <ul>
          {props.user.blogs.map( (a) => <li key={a.title}>{a.title} by {a.author}</li>)}
        </ul>
      </div>
      :
      <b>blogs added: none</b>
    }    
  </div>
)

User.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default User