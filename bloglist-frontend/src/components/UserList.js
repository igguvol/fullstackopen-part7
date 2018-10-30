import React from 'react'
import Togglable from './Togglable'
import UserForm from './UserForm'

const UserList = (props) => (
  <div>
    <Togglable buttonLabel='create new'>
      <UserForm 
        handleChange={props.handleChange}
        handleSubmit={props.addUser}
      />
    </Togglable>
    <h2>users</h2>
    <table>
      <tbody>
        <tr>
          <th>&nbsp;</th>
          <th><b>blogs added</b></th>
        </tr>
        {props.users&&props.users.map( (a) => {
          console.log('user 1: ', a)
          return (<tr key={a.id}><td>{a.name}</td><td>{a.blogs?a.blogs.length:'-'}</td></tr>) 
        }
          )}
      </tbody>
    </table>
  </div>

);

export default UserList;