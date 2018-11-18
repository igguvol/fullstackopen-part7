import { bindActionCreators } from 'redux'

const initialState = []

const reducer = (state = initialState, action) => {
  console.log('BlogReducer',action)
  switch (action.type) {
    case 'ADD_BLOGS':
      return state.concat(action.blogs)
    case 'UPDATE_BLOG':
      for ( var i=0; i<action.length; i++ )
      {
        if ( state[i].id === action.blog.id )
        {
          state[i] = action.blog
          return state;
        }
      }
      return state;
    default:
      return state
  }
}


export const addBlogs = (blogs) => {
  return async (dispatch) => {
    dispatch({
      type: 'ADD_BLOGS',
      blogs: blogs
      });
  }
}
export const updateBlog = (blog) => {
  return async (dispatch) => {
    dispatch({
      type: 'UPDATE_BLOG',
      blog: blog
      });
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      blogs: bindActionCreators( {addBlogs,updateBlog}, dispatch),
    }
  };
}


export default { reducer, mapDispatchToProps };