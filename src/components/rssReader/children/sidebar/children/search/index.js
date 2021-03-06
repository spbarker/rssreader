import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {SearchIcon} from '../../../../../icons'
import {InputField} from '../../../../../ui'
import Styles from './styles.scss'

/**
 * Search component
 */
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchValue: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  /**
   * Handles search value change
   * @param {object} evt - the event fired on input change
   */
  onSearchChange (evt) {
    const newValue = evt.target.value
    this.setState({searchValue: newValue})
    this.props.searchFeeds(newValue)
  }

  /**
   * Renders the search input field
   */
  renderSearchInput () {
    return (
      <div className={Styles.searchInputField}>
        <InputField
          placeholder={'Filter your feeds ...'}
          value={this.state.searchValue}
          onChange={this.onSearchChange} />
      </div>
    )
  }

  /**
   * Renders the search icon
   */
  renderSearchIcon () {
    return (
      <div className={Styles.searchIconContainer}>
        <SearchIcon />
      </div>
    )
  }

  /**
   * Renders the component
   */
  render () {
    return (
      <div className={Styles.searchContainer}>
        <h1 className={Styles.header}>Content Generator</h1>
        {this.renderSearchInput()}
        {this.renderSearchIcon()}
      </div>
    )
  }
}

Search.propTypes = {
  searchFeeds: PropTypes.func.isRequired
}

export default Search
