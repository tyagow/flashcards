import React from "react"
import { shallow } from "enzyme"
import NewDeck from "./index"

describe("NewDeck Screen", () => {
  it("should render a label", () => {
    const wrapper = shallow(<NewDeck />)
    expect(wrapper).toMatchSnapshot()
  })
})
