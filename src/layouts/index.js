import { Fragment, createElement as h } from "react"
import Helmet from "react-helmet"
import Page from "../parts/page.js"
import style from "../parts/style.js"

const css = {
  "body": {
    "background-color": "rgba(0,0,0,0)",
    "margin": "0",
    "position": "relative",
    "text-size-adjust": "100%"
  },
  "html": {
    "box-sizing": "border-box",
    "height": "100%",
    "overflow-x": "hidden",
    "width": "100%"
  }
}

export default (a) =>
  h (
    Fragment,
    {},
    style ({ ... css.html }) ((b) =>
      h (Helmet, { "htmlAttributes": { "class": b.className } })),
    style ({ ... css.html, ... css.body }) ((c) =>
      h (Helmet, { "bodyAttributes": { "class": c.className } })),
    h (Page, {}, a.children ())
  )
