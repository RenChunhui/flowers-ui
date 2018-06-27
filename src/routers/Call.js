import React from 'react';

class Call extends React.Component {
  render() {
    return (
      <div>
        <a href="tel:+18680775140">Tel</a>
        <a href="sms:+18680775140?body='hadf'"></a>
      </div>
    )
  }
}

export default Call;
