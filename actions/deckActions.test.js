import { NEW_DECK, createDeck } from "./deckActions"

describe("CREATE_NEW_DECK", () => {
  it("action should return expected object", () => {
    const expected = { type: NEW_DECK, payload: "Title Deck" }
    expect(createDeck("Title Deck")).toEqual(expected)
  })
})
