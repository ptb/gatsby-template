import Link from "gatsby-link"
import { createElement as h } from "react"

export default () =>
  h ("div", {},
    h (Link, { "to": "/b/" }, "To B"))
