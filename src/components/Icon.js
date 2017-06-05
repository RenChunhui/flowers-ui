/**
 * @fileoverview 图标
 * @author Ren Chunhui
 * 
 * Copyright (c) 2017 Ren Chunhui
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

import React from 'react';
import PropTypes from 'prop-types';

class Icon extends React.Component {
    render() {
        return(
            <div className="icon">
                <span className="material-icons">{this.props.iconName}</span>
            </div>
        )
    }
}

Icon.propTypes = {
    /**
     * 图标名字
     */
    iconName: PropTypes.string.isRequired
}

export default Icon;