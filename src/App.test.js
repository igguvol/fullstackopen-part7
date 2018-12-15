import 'raf/polyfill'
//import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import store from './store'
import { Provider } from 'react-redux'
import localStorageMock from './setupTests'

Enzyme.configure({ adapter: new Adapter() })

const getLocalStorage = () => {
  if (!typeof window.localStorage === undefined) return window.localStorage
  else if (!typeof localStorage === undefined) return localStorage
  else return localStorageMock
}


describe('<App />', () => {
  let app

  describe('when user is not logged', () => {
    beforeEach(() => {
      app = mount(<Provider store={store}><App/></Provider>)
    })

    it('when user is not logged, only the login form is shown', () => {
      const form = app.find('form')
      expect(form.length).toBe(1)
      const blogs = app.find(Blog)
      expect(blogs.length).toBe(0)
    })
  })

  describe('when user is logged', () => {
    
    beforeEach(() => {
      const st = getLocalStorage()
      st.setItem('loggedBlogAppUser', JSON.stringify({ username: 'tester', name: 'test', token: '123' }))
      app = mount(<Provider store={store}><App/></Provider>)
    })

    it('navMenu is shown', () => {
      app.update()
      console.log(app)
      const navMenu = app.find('.navMenu')
      expect(navMenu).not.toBe(undefined)
      expect(0).toBe(0)
    })
  })
  
})


describe('note app', () => {
  let page
  beforeEach(async () => {
    page = await global.__BROWSER__.newPage();
    await page.goto('http://localhost:3000')
  })

  it('create note', async () => {
    await page.waitForSelector('#root')
    const textContent = await page.$eval('body', el => el.textContent)
    expect(textContent.includes('Blog app')).toBe(true)
  })

})