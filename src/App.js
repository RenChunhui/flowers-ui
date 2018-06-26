import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routes } from './routes';

import Home from './routers/Home';
import Location from './routers/Location';
import Orientation from './routers/Orientation';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map(route => (
              <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
            ))
          }
        </Switch>
      </Router>
    )
  }
}

export default App;
