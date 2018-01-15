import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Form from './components/Form'
import Result from './components/Result'
import './App.css'

injectTapEventPlugin()

class App extends Component {
  static propTypes = {
    guesses: PropTypes.shape({
      result: PropTypes.string.isRequired,
      won: PropTypes.bool.isRequired,
      lost: PropTypes.bool.isRequired,
      counter: PropTypes.number.isRequired
    }).isRequired
  }
  render () {
    return (
      <MuiThemeProvider className="App">
        <div>
          <AppBar
            title={'Hangman ' + this.props.guesses.counter}
            showMenuIconButton={false}
            style={{
              backgroundColor: '#222',
              color: 'white',
              fontFamily: 'Audiowide'
            }}
          />
          {/* <code>{this.props.guesses.counter}</code> */}
          <p className="App-intro">{ this.props.guesses.result }</p>
          <Form />
          <Result in={this.props.guesses.won} title="You have won!!"/>
          <Result in={this.props.guesses.lost} title="You have lost :-("/>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    guesses: state.guessInformation
  }
}

export default connect(mapStateToProps)(App)
