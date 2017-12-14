/**
 * @fileoverview 应用栏
 * @author Ren Chunhui
 *
 * Copyright (c) 2017 Ren Chunhui
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */
import React from 'react'
import PropTypes from 'prop-types';

class AppBar extends React.Component {
  render() {
    return(
      <div className="appbar">
        <i class="material-icons">menu</i>
        <span className="title">{this.props.title}</span>
      </div>
    )
  }
}

AppBar.propTypes = {
  /**
   * 标题
   */
  title: PropTypes.string.isRequired
}

export default AppBar
