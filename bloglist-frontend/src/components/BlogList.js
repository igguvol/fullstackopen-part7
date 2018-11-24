import React from 'react'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const BlogList = (props) => (
  <div key='BlogList'>
    {props.handleChange?
      <Togglable buttonLabel='create new blog' className='animButton'>
        <BlogForm 
          handleChange={props.handleChange}
          title={props.title}
          author={props.author}
          url={props.url}
          handleSubmit={props.addBlog}
        />
      </Togglable>
      :
      null
    }

    <h2>blogs</h2>
    {props.blogsInOrder.map(blog => 
      (<div key={blog.id} style={{margin:'0.3em',padding:'0.1em',border:'1px solid black'}}>
        <NavLink exact to={`/blogs/${blog.id}`}>{blog.title}&nbsp;{blog.author}</NavLink>
      </div>) 

    )}
  </div>
)

BlogList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  addBlog: PropTypes.func.isRequired,
  blogsInOrder: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default BlogList