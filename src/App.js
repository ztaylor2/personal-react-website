import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './App.css';

import Recommendations from './Components/Recommendations';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Summary from './Components/Summary';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={history}>

            <div>

              <h1> <Link to="/" className="title"> Zachary M. Taylor </Link> </h1>

              <ul className="sidenav">
                <li> <Link to="/Components/Resume" className="link"> Resume </Link> </li>
                <li> <Link to="/Components/Portfolio" className="link"> Portfolio </Link> </li>
                <li> <Link to="/Components/Recommendations" className="link"> Recommendations </Link> </li>
                <li> <Link to="/Components/Contact" className="link"> Contact </Link> </li>
              </ul>

              
              <Route exact path="/" component={Summary}/>
              <Route path="/Components/Resume" component={Resume}/>
              <Route path="/Components/Portfolio" component={Portfolio}/>
              <Route path="/Components/Recommendations" component={Recommendations}/>
              <Route path="/Components/Contact" component={Contact}/>

            </div>

          </Router>

      </div>
    );
  }
}

export default App;
