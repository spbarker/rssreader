/*
 global describe
 global expect
 global it
*/

import reducer from '../../../src/data/reducer'
import initialState from '../../../src/data/initialState'
import ActionTypes from '../../../src/data/actionTypes'

function expectReducer (state, action, expected) {
  expect(reducer(state, action)).toEqual(expected)
}

describe('Reducer tests', () => {
  it('should return the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  it('should handle removing a feed success', () => {
    const state = {
      feeds: [
        {name: 'test1', url: 'https://e.com'},
        {name: 'test2', url: 'https://f.com'},
        {name: 'test3', url: 'https://g.com'}
      ]
    }
    expectReducer(
      state,
      {
        type: ActionTypes.REMOVE_FEED_SUCCESS,
        feed: {
          name: state.feeds[1].name,
          url: state.feeds[1].url
        }
      },
      {
        feeds: [
          state.feeds[0],
          state.feeds[2]
        ]
      }
    )
  })

  it('should handle adding a feed successfully', () => {
    const feed = {name: 'test4', url: 'https://h.com'}
    const action = {type: ActionTypes.ADD_FEED_SUCCESS, feed}
    const state = {
      feeds: [
        {name: 'test1', url: 'https://e.com'},
        {name: 'test2', url: 'https://f.com'},
        {name: 'test3', url: 'https://g.com'}
      ]
    }
    const expectedState = {
      ...state,
      feeds: state.feeds.concat(feed)
    }

    expectReducer(state, action, expectedState)
  })

  it('should handle displaying errors', () => {
    const action = {type: ActionTypes.DISPLAY_ERROR, text: 'Error example'}
    const state = {
      feeds: [
        {name: 'test1', url: 'https://e.com'},
        {name: 'test2', url: 'https://f.com'},
        {name: 'test3', url: 'https://g.com'}
      ]
    }
    const expectedState = {
      ...state,
      error: action.text
    }

    expectReducer(state, action, expectedState)
  })

  it('should handle searching for a feed', () => {
    const action = {type: ActionTypes.SEARCH_FOR_FEED, name: 'example search'}
    const state = {
      feeds: [
        {name: 'test1', url: 'https://e.com'},
        {name: 'test2', url: 'https://f.com'},
        {name: 'test3', url: 'https://g.com'}
      ]
    }
    const expectedState = {
      ...state,
      searchTerm: action.name
    }

    expectReducer(state, action, expectedState)
  })

  it('should handle dismissing errors', () => {
    const action = {type: ActionTypes.DISMISS_ERROR}
    const state = {
      feeds: [
        {name: 'test1', url: 'https://e.com'},
        {name: 'test2', url: 'https://f.com'},
        {name: 'test3', url: 'https://g.com'}
      ],
      error: 'Example'
    }
    const expectedState = {
      ...state,
      error: null
    }

    expectReducer(state, action, expectedState)
  })
})
