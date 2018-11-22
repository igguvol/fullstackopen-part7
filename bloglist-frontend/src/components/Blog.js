import React from 'react'
import BlogCommentForm from './BlogCommentForm'

class Blog extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }
  render() {
    const { blog, like, deletable, remove } = this.props

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      marginBottom: 5
    }

    const contentStyle = {
      margin: 5,
    }

    const adder = blog.user ? blog.user.name : 'anonymous'

    return (
      <div>
        <div style={blogStyle} key={blog.id} className='card'>
          <div className='card-body'>
            <div
              onClick={() => {}}
              className='card-title'
            >
              <h1 className='card-title'>{blog.title} {blog.author}</h1>
            </div>
            <div style={contentStyle} className='content card-text'>
              <div>
                <a href={blog.url}>{blog.url}</a>
              </div>
              <div>
                {blog.likes} likes {like?<button className='animButton' onClick={like}>like</button>:null}
              </div>
              <div>
                added by {adder}
              </div>
              {remove && deletable && <div><button className='animButton' id={blog.id} onClick={this.props.remove(blog.id)}>delete</button></div>}
            </div>
          </div>
        </div>
        <br />
        <h2>comments</h2>
        <BlogCommentForm blogId={blog.id} comments={blog.comments} />
      </div>
    )
  }
}

export default Blog