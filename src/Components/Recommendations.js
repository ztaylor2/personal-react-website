import React, { Component } from 'react';

class Recommendations extends Component {
  render() {
    return (
      <div className="content">

      	<p className="recTitle">
      		Hood Technology Internship: 
      	</p>

      	<img className="rec" alt="Hood Tech Letter of Recommendation" src={require('./HoodTechLetter.png')} />

      	<p className="recTitle">
      		Assistant Carpenter: 
      	</p>

        <img className="rec" alt="Decks Letter of Recommendation" src={require('./WestCoastDecksLetter.jpg')} />

      </div>
    );
  }
}

export default Recommendations;
