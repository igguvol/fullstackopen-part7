import React from 'react'
import PropTypes from 'prop-types'

const UserForm = ({ title, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Create new user</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username">Name</label>
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
  title: PropTypes.string.isRequired,
}

export default UserForm