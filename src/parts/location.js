import { Component, createElement as h } from "react"
import { withRouter } from "react-router-dom"

export default withRouter (
  class extends Component {
    render () {
      return h (
        "div",
        { "className": this.props.className },
        this.props.children
      )
    }

    shouldComponentUpdate (nextProps, _nextState) {
      return this.props.location.pathname === nextProps.location.pathname
    }
  }
)
