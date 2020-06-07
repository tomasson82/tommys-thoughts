import React from "react"
import renderer from "react-test-renderer"

import Layout from "../layout"

describe("Layout - test jest setup", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Layout location={{ pathname: "/" }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
