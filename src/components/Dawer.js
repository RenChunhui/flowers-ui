/**
 * @fileoverview 侧边栏
 * @author Ren Chunhui
 *
 * Copyright (c) 2017 Ren Chunhui
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */

import React from 'react';

class Dawer extends React.Component {

    render() {
        return(
            <div className={`wallpaper ${this.props.show ? 'visiable' : 'hidden'}`} onClick={() => this.props.showDawer()} >
              <div className="dawer">
                {this.props.children}
              </div>
            </div>
        )
    }
}

export default Dawer;
