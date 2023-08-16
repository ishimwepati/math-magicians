import React from 'react';
import './Calculator.css';
import Button from './Button'; // Assuming you create a Button component

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="÷" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="x" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
      </div>
    </div>
  );
}

export default Calculator;
