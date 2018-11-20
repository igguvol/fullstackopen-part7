import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationMenu = (props) => (
  <div style={{backgroundColor:'lightblue', padding:'1em', border:'1px solid black'}}>
    <NavLink activeStyle={props.activeStyle} style={props.defaultStyle} exact to='/'>blogs</NavLink>&nbsp;
    <NavLink activeStyle={props.activeStyle} style={props.defaultStyle} exact to='/users'>users</NavLink>&nbsp;
    {props.user.name} logged in <button onClick={props.logout}>logout</button>
  </div>
);

export default NavigationMenu;