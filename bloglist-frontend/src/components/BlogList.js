import React from 'react'
import BlogForm from './BlogForm'
import Togglable from './Togglable'
import {NavLink} from 'react-router-dom'

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
);

export default BlogList;