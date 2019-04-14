import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { Header, Main } from '../presentational/Header.jsx'
class Index extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor() {
    super()
    this.state = { themeColor: 'red' }
  }

  getChildContext() {
    return { themeColor: this.state.themeColor }
  }

  render() {
    return (
      <div>
        <div id="title" />
        <div id="content" />
      </div>
    )
  }
}
export default Index
