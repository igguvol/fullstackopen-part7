import React from 'react'
import PropTypes from 'prop-types'

const UserForm = ({ title, author, url, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Create new user</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label for="username">Name</label>
          <input 
            className='form-control'
            value={title}
            name='title'
            onChange={handleChange}
          />
        </div>
        <button className='animButton' type="submit">Submit</button>
      </form>
    </div>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default UserForm