/**
 * @fileoverview 应用栏
 * @author Ren Chunhui
 *
 * Copyright (c) 2017 Ren Chunhui
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

import React from 'react';
import PropTypes from 'prop-types';


class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="appbar">
        <div className="nav-icon" onClick={() => this.props.showDawer()}>
          <span className="material-icons">menu</span>
        </div>
        <a className="title">{this.props.title}</a>
      </div>
    )
  }
}

AppBar.propTypes = {
  /**
   * Nav icon
   */
  navIcon: PropTypes.bool,
  title: PropTypes.string,
  filterIcon: PropTypes.bool
}

AppBar.defaultProps = {
  navIcon: false,
  title: 'Application',
  filterIcon: false
}

export default AppBar;
