/**
 * @fileoverview 按钮
 * @author Ren Chunhui
 * 
 * Copyright (c) 2017 Ren Chunhui
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        const className = this.props.type === 'flat' ? `color-${this.props.style}` : `btn-raised btn-${this.props.style}`;

        return(
           <button className={className}>
               {this.props.label}
           </button>
        )
    }
}

Button.propTypes = {
    /**
     * 按钮文字
     */
    label: PropTypes.string.isRequired,
    /**
     * 按钮类型
     */
    type: PropTypes.oneOf(['flat','raised']),
    /**
     * 样式
     */
    style: PropTypes.oneOf(['light','info','danger','primary','success','dark','warning'])
};

Button.defaultProps = {
    label:'Button',
    type: 'flat',
    style: 'light'
};

export default Button;
