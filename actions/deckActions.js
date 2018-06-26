export const NEW_DECK = 'NEW_DECK'
export const createDeck = deckTitle => ({
  type: NEW_DECK,
  payload: deckTitle,
})

export const DECK_SELECTED = 'DECK_SELECTED'
export const selectDeck = deck => ({
  type: DECK_SELECTED,
  payload: deck,
})
