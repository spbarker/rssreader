import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {RemoveIcon} from '../../../../../../../../../icons'
import {Toggle} from '../../../../../../../../../ui'
import Styles from './styles.scss'

class Feed extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toggled: false
    }

    this.onToggle = this.onToggle.bind(this)
  }

  onToggle () {
    this.setState({toggled: !this.state.toggled})
  }

  renderRemoveIcon () {
    return (
      <div className={Styles.removeIconContainer}>
        <RemoveIcon />
      </div>
    )
  }

  render () {
    const {name} = this.props
    const {toggled} = this.state
    return (
      <div className={Styles.feed} onClick={this.onToggle}>
        <Toggle toggled={toggled} onToggle={this.onToggle} />
        <p className={Styles.feedName}>{name}</p>
        {this.renderRemoveIcon()}
      </div>
    )
  }
}

Feed.defaultProps = {
  name: ''
}

Feed.propTypes = {
  name: PropTypes.string
}

export default Feed
