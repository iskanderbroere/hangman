import { GUESS } from '../actions/guess'

export const guesses = {
  secretword: 'Hottentottententententoonstelling',
  result: '_'.repeat('Hottentottententententoonstelling'.length),
  guessedLetters: [],
  counter: 0,
  won: false,
  lost: false
}

export default function (state = guesses, action = {}) {
  switch (action.type) {
    case GUESS:
      const guess = action.guess.toUpperCase()
      const secretletters = splitAndToUpperCase(state.secretword)
      const previousresult = state.result.length > 0 ? state.result.split('') : []
      const correctGuess = secretletters.includes(guess)
      const doubleGuess = (state.guessedLetters.includes(guess) && !correctGuess) ? state.counter - 1 : state.counter
      const correctletters = secretletters.map((letter, index) => {
        if (letter === guess) return letter
        else if (previousresult[index] !== '_' && previousresult.length > 0) return letter
        else return '_'
      })
      const newCounter = !correctGuess ? doubleGuess + 1 : doubleGuess
      const newResult = correctletters.join('')
      const won = newResult === secretletters.join('')
      const lost = newCounter > 5

      const newState = {
        secretword: state.secretword,
        result: newResult,
        guessedLetters: state.guessedLetters.concat([guess]),
        counter: lost ? 0 : newCounter,
        won: won,
        lost: lost
      }
      return newState
    default:
      return state
  }
}

function splitAndToUpperCase (items) {
  return items.split('').map(item => item.toUpperCase())
}
