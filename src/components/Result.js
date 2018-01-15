import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'

const defaultStyle = {
  transition: `opacity .5s ease-in-out`,
  opacity: 0,
  display: 'none'
}

const transitionStyles = {
  entering: { opacity: 0, display: 'block' },
  entered: { opacity: 1, display: 'block' }
}

class Result extends Component {
  static propTypes = {
    in: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  }
  render () {
    return (
      <Transition in={this.props.in} timeout={50}>
        {(state) => (
          <h1 className="Won" style={{ ...defaultStyle, ...transitionStyles[state] }}>
            {this.props.title}
          </h1>)}
      </Transition>
    )
  }
}
export default Result
