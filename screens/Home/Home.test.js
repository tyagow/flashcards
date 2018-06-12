import React from "react"
import { shallow } from "enzyme"
import Home from "./index"

describe("Home Screen", () => {
  it("should render a label", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
