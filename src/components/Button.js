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

class Button extends React.Component {
    render() {
        return(
           <button className={`button-${this.props.style}`}>
               {this.props.label}
           </button> 
        )
    }
}

Button.propTypes = {
    /**
     * 按钮文字
     */
    label: React.PropTypes.string.isRequired,
    /**
     * 按钮类型
     */
    type: React.PropTypes.oneOf(['action','flat','raised']),
    /**
     * 样式
     */
    style: React.PropTypes.oneOf(['light','info','danger','primary','success','dark','warning'])
}

Button.defaultProps = {
    label:'Button',
    type: 'flat',
    style: 'light'
}

export default Button;
