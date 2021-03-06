import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe.only('<Blog />', () => {
  let blogComponent

  beforeEach(() => {
    const blog = {
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: '',
      likes: 3
    }
    blogComponent = shallow(
      <Blog blog={blog} like={() => {}} deletable={false} remove={()=>{}} />
    )
  })

  it('at start the details are not displayed', () => {
    const contentDiv = blogComponent.find('.content')
    expect(contentDiv.getElement()).toBeDefined()
  })

})