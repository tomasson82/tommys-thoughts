import React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react"

import Layout from "../layout"

describe("Layout - render snapshot and check header and footer", () => {
  it("renders correctly [snapshot]", () => {
    const tree = renderer
      .create(<Layout location={{ pathname: "/" }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("Displayes the correct title and footer", () => {
    render(<Layout location={{ pathname: "/" }} title="Awesome Test Title" />)
    expect(
      screen.getByRole("heading", { name: "Awesome Test Title" })
    ).toBeInTheDocument()

    expect(screen.getByRole("link", { name: "Gatsby" })).toBeInTheDocument()
  })
})
