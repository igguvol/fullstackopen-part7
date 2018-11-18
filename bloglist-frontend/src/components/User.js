import React from 'react'
import Togglable from './Togglable'
import UserForm from './UserForm'

const User = (props) => (
  <div>
    {console.log('USer.props',props)}
    <Togglable buttonLabel='create new'>
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
        {props.user.blogs.map( (a) => <li>{a.title} by {a.author}</li>)}
        </ul>
      </div>
      :
      <b>blogs added: none</b>
    }    
  </div>
);

export default User;