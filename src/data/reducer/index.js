import ActionTypes from '../actionTypes'
import initialState from '../initialState'

export default (state = initialState, action = {type: 'None'}) => {
  switch (action.type) {
    case ActionTypes.REMOVE_FEED_START:
    case ActionTypes.ADD_FEED_START:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.REMOVE_FEED_SUCCESS:
      return {
        ...state,
        feeds: state.feeds.filter((feed) => {
          if (feed.name !== action.feed.name ||
            feed.url !== action.feed.url) {
            return true
          } else {
            return false
          }
        })
      }
    case ActionTypes.ADD_FEED_SUCCESS:
      return {
        ...state,
        loading: false,
        feeds: state.feeds.concat(action.feed)
      }
    case ActionTypes.ADD_FEED_FAILURE:
      return {
        ...state,
        loading: false,
        error: `Failed to add feed at ${action.url}. Please double check the URL.`
      }
    case ActionTypes.SEARCH_FOR_FEED:
      return {
        ...state,
        searchTerm: action.name
      }
    case ActionTypes.DISMISS_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}
