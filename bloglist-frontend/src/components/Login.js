import React from 'react'


const Login = (props) => (
  <div key='LoginForm'>
    <h2>login</h2>
    <form onSubmit={props.onSubmit}>
      <div>
        username
        <input
          type="text"
          name="username"
          username={props.username}
          onChange={props.onChange}
        />
      </div>
      <div>
        password
        <input
          type="password"
          name="password"
          password={props.password}
          onChange={props.onChange}
        />
      </div>
      <button type="submit">kirjaudu</button>
    </form>
  </div>
);



export default Login;
