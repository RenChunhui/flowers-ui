import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Location from './routers/Location';
import Orientation from './routers/Orientation';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Location}/>
          <Route path="/orientation" component={Orientation}/>
        </Switch>
      </Router>
    )
  }
}

export default App
