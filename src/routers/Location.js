import React from 'react';

class Location extends React.Component {
  getCurrentPosition() {
    if(!navigator.geolocation) {
      console.log('您的浏览器不支持地理位置');
      return;
    }

    navigator.geolocation.getCurrentPosition( (position) => {
      console.log('您的当前位置:',position.coords.latitude,position.coords.longitude);
    },error => {
      console.log('无法获取您的位置');
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getCurrentPosition}>获取当前位置</button>
      </div>
    );
  }
}

export default Location;
