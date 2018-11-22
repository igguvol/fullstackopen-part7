import React from 'react'
import { connect } from 'react-redux'
import blogService from '../services/blogs'

class BlogCommentForm extends React.Component
{

  constructor(props) {
    super(props)
    this.state = { comment:'' }
  }


  handleChange = (e) => {
    this.setState( {comment:e.target.value} );
    e.preventDefault();
  }

  handleSubmit = (e) => {
    const reply = blogService.addComment( this.props.blogId, this.state.comment );
    this.updateBlog( reply );
    this.setState( {comment:''} );
    e.target.value = '';
    e.preventDefault();
  }



  render() 
  {
    return (
      <div>
        {this.props.comments&&
          <ul>
            {this.props.comments.map( (a,i) => <li id={i}>{a}</li> )}
          </ul>
        }
        <form onSubmit={this.handleSubmit}>
          <input
            className='form-control'
            value={this.comment}
            name='comment'
            onChange={this.handleChange}
          />
          <button className='animButton' type="submit">Commit</button>
        </form>
      </div>
    )
  }
}


export default connect(
  (a) => a,
  {   } 
)(BlogCommentForm)
