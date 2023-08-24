import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './AppRouter.css';

const AppRouter = () => (
  <Router>
    <div className="header">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div className="navbar">
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default AppRouter;
