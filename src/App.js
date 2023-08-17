import React from 'react';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QuoteDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator />
      <QuoteDisplay />
    </div>
  );
}

export default App;
