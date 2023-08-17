import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ label, isOperator, gridColumnSpan }) {
  const buttonClassName = isOperator ? 'button operator' : 'button';
  const buttonStyle = gridColumnSpan ? { gridColumn: `span ${gridColumnSpan}` } : {};

  return (
    <button className={buttonClassName} style={buttonStyle} type="button">
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isOperator: PropTypes.bool,
  gridColumnSpan: PropTypes.number,
};

Button.defaultProps = {
  isOperator: false,
  gridColumnSpan: 1,
};

export default Button;
