export const GUESS = 'GUESS'

export function guessWord (guess) {
  return { type: GUESS, guess }
}
