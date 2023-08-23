import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'AC') {
      setCalculation({
        total: null,
        next: null,
        operation: null,
      });
    } else {
      const newCalculation = calculate(calculation, buttonName);
      if (newCalculation.next !== null || newCalculation.total !== null) {
        setCalculation(newCalculation);
      }
    }
  };
  const handleSubtraction = () => {
    handleButtonClick('-');
  };

  const handleAddition = () => {
    const newCalculation = calculate(calculation, '+');
    setCalculation(newCalculation);
  };

  return (
    <div className="calculator">
      <div className="title"><h1>Let&apos;s do some math</h1></div>
      <div className="calculator-content">
        <div className="display">
          {calculation.next !== null ? calculation.next : calculation.total || '0'}
        </div>
        <div className="buttons">
          <Button label="AC" onClick={() => handleButtonClick('AC')} />
          <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button label="÷" onClick={() => handleButtonClick('÷')} isOperator />
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="x" onClick={() => handleButtonClick('x')} isOperator />
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="-" onClick={handleSubtraction} isOperator />
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="+" onClick={handleAddition} isOperator />
          <Button label="0" onClick={() => handleButtonClick('0')} gridColumnSpan={2} />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button label="=" onClick={() => handleButtonClick('=')} isOperator />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
