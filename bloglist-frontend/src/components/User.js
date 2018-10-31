import React from 'react'
import Togglable from './Togglable'

const User = (props) => (
  <div>
    <Togglable buttonLabel='create new'>
      <UserForm 
        handleChange={props.handleChange}
        handleSubmit={props.addUser}
      />
    </Togglable>
    <h2>{props.name}</h2>
    <b>Added blogs</b>
    <ul>
      {user.blogs.map( (a) => (<li>{a.name}</li>) )}
    </ul>
  </div>

);

export default User;