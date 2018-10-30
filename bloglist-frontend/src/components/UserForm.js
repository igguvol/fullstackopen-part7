import React from 'react'
import PropTypes from 'prop-types'

const UserForm = ({ title, author, url, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Luo uusi käyttäjä</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name
          <input
            value={title}
            name='title'
            onChange={handleChange}
          />
        </div>
        <button type="submit">Luo</button>
      </form>
    </div>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}


export default UserForm