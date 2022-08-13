import React from 'react';
import Navbar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Academia from './pages/Academia';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/academia' component={Academia} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
    </>
  );
}

export default App;