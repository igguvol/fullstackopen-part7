import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Login extends React.Component
{

  render()
  {
    if (this.props.login && this.props.login.token)
      return null
    return (<div key='LoginForm'>
      <h2>login</h2>
      <form onSubmit={this.props.onSubmit}>
        <div>
          username
          <input
            type="text"
            name="username"
            username={this.props.username}
            onChange={this.props.onChange}
          />
        </div>
        <div>
          password
          <input
            type="password"
            name="password"
            password={this.props.password}
            onChange={this.props.onChange}
          />
        </div>
        <button type="submit" className='animButton'>Login</button>
      </form>
    </div>
    )
  }
}

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default connect(
  (a) => a,
  null //mapDispatchToProps
)(Login)
