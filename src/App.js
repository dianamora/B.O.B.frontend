import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>

  );
}

export default App;
