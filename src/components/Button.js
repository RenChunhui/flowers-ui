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
        return(
           <button className="button-{this.props.style}">
               Button
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
    type: PropTypes.oneOf(['action','flat','raised']),
    /**
     * 样式
     */
    style: PropTypes.oneOf(['light','info','danger','primary','warning','success','dark'])
}

Button.defaultProps = {
    label:'Button',
    type: 'flat',
    style: 'light'
}

export default Button;