import React from 'react'
import Blog from './Blog'
import BlogForm from './BlogForm'
import Togglable from './Togglable'

const BlogList = (props) => (
  <div key='BlogList'>
    <Togglable buttonLabel='uusi blogi'>
      <BlogForm 
        handleChange={props.handleChange}
        title={props.title}
        author={props.author}
        url={props.url}
        handleSubmit={props.addBlog}
      />
    </Togglable>

    <h2>blogs</h2>
    {props.blogsInOrder.map(blog => 
      <Blog 
        key={blog._id} 
        blog={blog} 
        like={props.like(blog._id)}
        remove={props.remove(blog._id)}
        deletable={blog.user === undefined || blog.user.username === props.username}
      />
    )}
  </div>
);

export default BlogList;