import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import './Web.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/home">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Commons-logo.svg/1024px-Commons-logo.svg.png" alt="Logo" className="logo" height='50px' />
          </Link>
          <Link to="/home" className="home-link">
            <h1>ABC</h1>
          </Link>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; ABC. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
