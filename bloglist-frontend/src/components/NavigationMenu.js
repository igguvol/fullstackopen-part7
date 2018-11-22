import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationMenu = (props) => (
  <div className='navMenu'>
    <NavLink className='animButton' activeStyle={props.activeStyle} style={props.defaultStyle} exact to='/'>blogs</NavLink>&nbsp;
    <NavLink className='animButton' activeStyle={props.activeStyle} style={props.defaultStyle} exact to='/users'>users</NavLink>&nbsp;
    {props.user.name} logged in <button className="animButton" onClick={props.logout}>logout</button>
  </div>
);

export default NavigationMenu;