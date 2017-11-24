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
} from 'react-router-dom';

import AppBar from './components/AppBar';
import Dawer from './components/Dawer';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { show: false }

    this.showDawer = this.showDawer.bind(this);
  }

  showDawer() {
    this.setState({
      show: !this.state.show
    })

    console.log('show:', this.state.show);
  }

  render() {
    return (
      <Router>
        <div>
          <AppBar title="Component" showDawer={this.showDawer} />
          <Dawer show={this.state.show} showDawer={this.showDawer}>
            <ul>
              <li><Link to="/button">Button</Link></li>
              <li><Link to="/nav">Navigation</Link></li>
            </ul>
          </Dawer>

          {/* <Route path="/button" component={ ButtonView }/>
                    <Route path="/nav" component={ NavigationView }/> */}
        </div>
      </Router>
    )
  }
}

export default App;
