export const NEW_DECK = "NEW_DECK"
export const createDeck = deckTitle => ({
  type: NEW_DECK,
  payload: deckTitle,
})
