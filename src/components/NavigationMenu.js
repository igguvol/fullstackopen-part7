import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavigationMenu = (props) => (
  <div className='navMenu' id='navMenu' style={{display:'flex'}}>
    <div>
      <NavLink id="blogLink" className='animButton' activeStyle={props.activeStyle} style={props.defaultStyle} exact to='/'>blogs</NavLink>
    </div>
    <div>
      <NavLink id="userLink" className='animButton' activeStyle={props.activeStyle} style={props.defaultStyle} exact to='/users'>users</NavLink>
    </div>
    <div style={{marginLeft:'auto'}}>
      <b>{props.user.name}</b> logged in
      &nbsp; 
      <button className="animButton" onClick={props.logout}>logout</button>
    </div>
  </div>
)

NavigationMenu.propTypes = {
  activeStyle: PropTypes.object.isRequired,
  defaultStyle: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

export default NavigationMenu