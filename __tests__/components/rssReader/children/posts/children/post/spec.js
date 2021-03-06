/*
   global expect
   global it
   global describe
   global jest
 */
import React from 'react'
import {mount} from 'enzyme'
import {Post} from '../../../../../../../src/components/rssReader/children/posts/children'

describe('<Post /> tests', () => {
  it('renders correctly', () => {
    const props = {
      name: 'Name',
      title: 'Title',
      url: 'https://example.com',
      link: 'https://another-example.com',
      description: 'this is an example for testing',
      pubDate: '2018-01-01 10:10',
      thumbnail: 'http://www.northeastjsconference.com/wp-content/uploads/2015/11/learn-javascript.png',
      guid: 'https://google.com'
    }
    const enzymeWrapper = mount(<Post {...props} />)
    expect(enzymeWrapper).toBeDefined()
    expect(enzymeWrapper.find('img').length).toBe(1)
  })

  it('does not render an image if the thumbnail is not provided', () => {
    const props = {
      name: 'Name',
      title: 'Title',
      url: 'https://example.com',
      link: 'https://another-example.com',
      description: 'this is an example for testing',
      pubDate: '2018-01-01 10:10',
      guid: 'https://google.com'
    }
    const enzymeWrapper = mount(<Post {...props} />)
    expect(enzymeWrapper.find('img').length).toBe(0)
  })

  it('will navigate to the posts location', () => {
    global.window = {}
    global.window.open = jest.fn()
    const props = {
      name: 'Name',
      title: 'Title',
      url: 'https://example.com',
      link: 'https://another-example.com',
      description: 'this is an example for testing',
      pubDate: '2018-01-01 10:10',
      guid: 'https://google.com'
    }
    const enzymeWrapper = mount(<Post {...props} />)
    enzymeWrapper.simulate('click')
    expect(global.window.open).toHaveBeenCalled()
  })
})
