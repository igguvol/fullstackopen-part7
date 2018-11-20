import React from 'react'
import {mapDispatchToProps}  from '../store'
import { connect } from 'react-redux'

class Login extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    if (this.props.login && this.props.login.token)
      return null;
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
        <button type="submit">kirjaudu</button>
      </form>
    </div>
    );
  }
}

export default connect(
  (a) => a,
  null //mapDispatchToProps
)(Login)
