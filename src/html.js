/* eslint-env commonjs */

import { createElement as h } from "react"

let css

try {
  css = require ("!raw-loader!../public/css/styles.css")
} catch (e) {
  console.log (e)
}

export default (props) =>
  h (
    "html",
    { ... props.htmlAttributes, "lang": "en", "xmlns": "http://www.w3.org/1999/xhtml" },
    h (
      "head",
      null,
      h ("meta", { "charset": "utf-8" }),
      h ("meta", { "content": "ie=edge", "http-equiv": "x-ua-compatible" }),
      h ("meta", {
        "content": "initial-scale=1, shrink-to-fit=no, width=device-width",
        "name": "viewport"
      }),
      h ("style", { "dangerouslySetInnerHTML": { "__html": css } }),
      props.headComponents
    ),
    h (
      "body",
      props.bodyAttributes,
      props.preBodyComponents,
      h ("div", {
        "dangerouslySetInnerHTML": { "__html": props.body },
        "id": "root",
        "key": "body"
      }),
      props.postBodyComponents
    )
  )
