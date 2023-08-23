import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './AppRouter.css'; // Import the CSS file

const AppRouter = () => (
  <Router>
    <div className="header">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div className="navbar">
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home |</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator |</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    {/* Define Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default AppRouter;
