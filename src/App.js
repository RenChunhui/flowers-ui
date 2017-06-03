/**
 * @description: App
 * @author: renchunhui2008@gmail.com
 * 
 * Copyright Ren Chunhui. All Rights Reserved.
 * 
 * This program is free software. You can redistribute and/or modify it
 * in accordance with the terms of the accompanying license agreement.
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ButtonView from './views/ButtonView';


class App extends React.Component {
    
    render() {
        return(
            <Router>
                <div>
                    
                    <ul>
                        <li><Link to="/button">Button</Link></li>
                    </ul>   
                    <Route path="/button" component={ ButtonView }/>
                </div>
            </Router>
        )
    }
}

export default App;