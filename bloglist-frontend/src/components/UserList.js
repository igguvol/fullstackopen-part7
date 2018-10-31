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
        {props.users&&props.users.map( (a) => 
          (<tr key={a.id}><td><a href={`/users/${a.id}`}>{a.name}</a></td><td>{a.blogs?a.blogs.length:'-'}</td></tr>) 
        )}
      </tbody>
    </table>
  </div>

);

export default UserList;