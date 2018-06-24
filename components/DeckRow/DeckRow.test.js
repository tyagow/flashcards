import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"

import DeckRow from "./DeckRow"

describe("DeckRow", () => {
  it("DeckRow should match snapshot", () => {
    const wrapper = shallow(<DeckRow deck={{ title: "Deck One" }} />)
    expect(wrapper).toMatchSnapshot()
  })
  it("should display title of a given deck", () => {
    const title = "Deck One"
    const wrapper = renderer.create(<DeckRow deck={{ title }} />).toJSON()
    expect(wrapper.children[0].children[0]).toEqual(title)
  })
})
