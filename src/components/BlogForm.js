import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({ title, author, url, handleChange, handleSubmit }) => {
  return (
    <div className='form-group'>
      <h2>Create new blog</h2>

      <form onSubmit={handleSubmit}>
        <div>
          title
          <input
            className='form-control'
            value={title}
            name='title'
            onChange={handleChange}
          />
        </div>
        <div>
          author
          <input
            className='form-control'
            value={author}
            name='author'
            onChange={handleChange}
          />
        </div>
        <div>
          url
          <input
            className='form-control'
            value={url}
            name='url'
            onChange={handleChange}
          />
        </div>        

        <button className='animButton' type="submit">Submit</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


export default BlogForm