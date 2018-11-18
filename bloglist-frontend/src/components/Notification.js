import React from 'react'
import { connect } from 'react-redux'
import {mapDispatchToProps}  from '../store'



class Notification extends React.Component
{
  constructor(props) {
    super(props)
  }


  render() 
  {
    console.log('render Notification', this.props.notification)
    if (this.props.notification === null || this.props.notification.message === null ||this.props.notification === undefined) {
      return null
    }

    return (
      <div className={this.props.notification.style}>
        {this.props.notification.message}
      </div>
    )
  }
}

//export default Notification

export default connect(
  (a) => a,
  mapDispatchToProps
)(Notification)
