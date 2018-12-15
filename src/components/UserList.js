import React from 'react'
import Togglable from './Togglable'
import UserForm from './UserForm'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const UserList = (props) => (
  <div>
    <Togglable buttonLabel='create new' className='animButton'>
      <UserForm 
        handleChange={props.handleChange}
        handleSubmit={props.addUser}
      />
    </Togglable>
    <h2>users</h2>
    <table class="usersTable">
      <tbody>
        <tr>
          <th>&nbsp;</th>
          <th><b>blogs added</b></th>
        </tr>
        {props.users&&props.users.map( (a) => 
          (<tr key={a.id}><td><NavLink exact to={`/users/${a.id}`}>{a.username}</NavLink></td><td style={{textAlign:'center'}}>{a.blogs?a.blogs.length:'-'}</td></tr>) 
        )}
      </tbody>
    </table>
  </div>

)

UserList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
}

export default UserList