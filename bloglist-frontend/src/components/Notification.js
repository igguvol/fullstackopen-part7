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
  null
)(Notification)
