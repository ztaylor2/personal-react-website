import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="content">

        <img className="resume" alt="resume" src={require('./port1.jpg')} />
        <img className="resume" alt="resume" src={require('./port2.jpg')} />
        <img className="resume" alt="resume" src={require('./port3.jpg')} />
        <img className="resume" alt="resume" src={require('./port4.jpg')} />
        <img className="resume" alt="resume" src={require('./port5.jpg')} />
        <img className="resume" alt="resume" src={require('./port6.jpg')} />
        <img className="resume" alt="resume" src={require('./port7.jpg')} />
        <img className="resume" alt="resume" src={require('./port8.jpg')} />
        <img className="resume" alt="resume" src={require('./port9.jpg')} />

      </div>
    );
  }
}

export default About;