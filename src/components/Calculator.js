import React from 'react';
import './Calculator.css';
import Button from './Button'; // Assuming you create a Button component

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <Button label="7" />
        <Button label="8" />
        {/* Add more buttons here */}
      </div>
    </div>
  );
}

export default Calculator;
