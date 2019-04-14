import React from 'react'
import PropTypes from 'prop-types'
import { connect } from '../../../../src/react-redux'

function Header({ themeColor }) {
  return <h1 style={{ color: themeColor }}>React.js 小书</h1>
}

Header.propTypes = {
  themeColor: PropTypes.string
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Header)
