import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import { guessWord } from '../actions/guess'

const mapDispatchToProps = dispatch => {
  return {
    guessWord: guess => dispatch(guessWord(guess))
  }
}

class ConnectedForm extends Component {
  static propTypes = {
    guess: PropTypes.string,
    guessWord: PropTypes.func.isRequired
  }
  constructor () {
    super()
    this.state = {
      guess: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit (event) {
    event.preventDefault()
    const guess = this.state.guess
    this.props.guessWord(guess)
    this.setState({ guess: '' })
  }
  render () {
    const guess = this.state.guess
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <label htmlFor="guess">Guess</label> */}
        <TextField
          autoFocus
          type="text"
          id="guess"
          value={guess.toUpperCase()}
          onChange={this.handleChange}
          hintText="Enter a letter"
        />
        {/* <input
          autoFocus
          type="text"
          id="guess"
          value={guess}
          onChange={this.handleChange}
        /> */}
        {/* <button type="submit">
          SAVE
        </button> */}
      </form>
    )
  }
}
export default connect(null, mapDispatchToProps)(ConnectedForm)
