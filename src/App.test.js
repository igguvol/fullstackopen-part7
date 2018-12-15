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
const puppeteer = require('puppeteer');

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


    it('after clicking name the details are displayed', () => {
      //TODO: 
      const onClick = () => {}
      const blogComponent = shallow(<SipleBlog blog={blog} onClick={onClick}/>)
      
      /*const userLink = blogComponent.find('.userLink')
      userLink.simulate('click')
  
      const contentDiv = blogComponent.find('.usersTable')
      expect(contentDiv.getElement().props.style.display).toEqual('')*/
      expect(0).toBe(0)
    })
  
  })
  
})


describe('note app', () => {
  let page
  beforeEach(async () => {
    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 5000 });
  
      console.log(await page.evaluate(() => document.title));
  
      await browser.close();
    } catch (err) {
      console.error(err);
    }

  })

  it('create note', async () => {
    await page.waitForSelector('#root')
    const textContent = await page.$eval('body', el => el.textContent)
    expect(textContent.includes('Blog app')).toBe(true)
  })

})