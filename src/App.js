import React from 'react';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Academia from './pages/Academia';
import Contact from './pages/Contact';
import Projects from './pages/Projects';



function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/academia' component={Academia} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <footer class="footer-distributed">

          <div class="footer-left">

            <h3>Quick<span>links</span></h3>

            <p class="footer-links">
              <a href="/">Home</a>
              ·
              <a href="/academia">Academia</a>
              ·
              <a href="/projects">Projects</a>
              ·
              <a href="/contact">Contact</a>
            </p>

            <p class="footer-company-name">Built © 2022</p>

            <div class="footer-icons">

              <a href="https://www.facebook.com/michael.akstin.7"><i class="fa fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/michael-akstin-54a984209/"><i class="fa fa-linkedin"></i></a>
              <a href="https://github.com/mjaxe?tab=repositories"><i class="fa fa-github"></i></a>

            </div>

          </div>

          <div class="footer-right">

            <p>Contact Me</p>

            <form action="#" method="post">

              <input type="text" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message"></textarea>
              <button>Send</button>

            </form>

          </div>

        </footer>
      </Router>
    </div>
  );
}

export default App;