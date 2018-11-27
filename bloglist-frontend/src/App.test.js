import 'raf/polyfill'
import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const getLocalStorage = () => {
  if (!typeof window.localStorage === undefined) return window.localStorage
  else if (!typeof localStorage === undefined) return localStorage
  else return false
}

describe('<App />', () => {
  let app

  describe('when user is not logged', () => {
    var store = {}
    beforeEach(() => {
      app = mount(<App store={store}/>)
    })

    it('when user is not logged, only the login form is shown', () => {
      const form = app.find('form')
      expect(form.length).toBe(1)
      const blogs = app.find(Blog)
      expect(blogs.length).toBe(0)
    })
  })

  describe('when user is logged', () => {
    var store={}
    beforeEach(() => {
      const st = getLocalStorage()
      st.setItem('loggedBlogAppUser', JSON.stringify({ username: 'tester', name: 'test', token: '123' }))
      app = mount(<App store={store}/>)
    })

    it('navMenu is shown', () => {
      //app.update()
      const navMenu = app.find('.navMenu')
      expect(navMenu).notToBe(undefined)
    })
  })
})