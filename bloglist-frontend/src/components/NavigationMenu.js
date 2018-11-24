import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationMenu = (props) => (
  <div className='navMenu' style={{display:'flex'}}>
    <div>
      <NavLink className='animButton' activeStyle={props.activeStyle} style={props.defaultStyle} exact to='/'>blogs</NavLink>
    </div>
    <div>
      <NavLink className='animButton' activeStyle={props.activeStyle} style={props.defaultStyle} exact to='/users'>users</NavLink>
    </div>
    <div style={{marginLeft:'auto'}}>
      <b>{props.user.name}</b> logged in
      &nbsp; 
      <button className="animButton" onClick={props.logout}>logout</button>
    </div>
  </div>
);

export default NavigationMenu;