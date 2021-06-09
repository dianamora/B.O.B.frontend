import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Contribute from './components/Contribute';
import Contact from './components/Contact';

export const BASE_URL = "https://blackownedbreweries.herokuapp.com";
// export const BASE_URL = "http://localhost:3000";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/about' exact component={About} />
        <Route path='/contribute' exact component={Contribute} />
        <Route path='/contact' exact component={Contact} />

      </Switch>
    </Router>

  );
}

export default App;
