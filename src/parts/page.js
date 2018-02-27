import { CSSTransition, TransitionGroup } from "react-transition-group"
import Location from "./location.js"
import { createElement as h } from "react"
import sass from "./page.sass"
import style from "./style.js"
import { withRouter } from "react-router-dom"

const css = {
  "page": {
    "box-sizing": "border-box",
    "height": "100%",
    "overflow-x": "hidden",
    "position": "absolute",
    "width": "100%"
  }
}

export default withRouter ((a) =>
  h (
    TransitionGroup,
    {},
    h (
      CSSTransition,
      {
        "classNames": {
          "enter": sass.next,
          "enterActive": sass.move,
          "exit": sass.exit,
          "exitActive": sass.move
        },
        "key": a.location.pathname,
        "timeout": 400
      },
      style ({ ... css.page }) ((b) =>
        h ("div", b, h (Location, { "location": a.location }, a.children)))
    )
  ))
