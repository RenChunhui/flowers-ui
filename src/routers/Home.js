import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from './../routes';

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            {
              routes.map(item => (
                <li><Link to={item.path}>{item.name}</Link></li>
              ))
            }
          </ul>
        </nav>
      </div>
    )
  }
}

export default Home;
