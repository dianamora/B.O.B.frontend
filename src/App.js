import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Contribute from './components/Contribute';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Main /> */}
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
