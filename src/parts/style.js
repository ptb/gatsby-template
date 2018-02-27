import { createElement as h } from "react"
import { styled } from "styletron-react"

export default (a) => (b) => h (styled ((c) => h (b, c), a))
