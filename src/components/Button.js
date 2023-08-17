import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  label, isOperator, gridColumnSpan, onClick,
}) {
  const buttonClassName = isOperator ? 'button operator' : 'button';
  const buttonStyle = gridColumnSpan ? { gridColumn: `span ${gridColumnSpan}` } : {};

  return (
    <button className={buttonClassName} style={buttonStyle} type="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isOperator: PropTypes.bool,
  gridColumnSpan: PropTypes.number,
  onClick: PropTypes.func.isRequired, // Add this line to specify onClick as a required prop
};

Button.defaultProps = {
  isOperator: false,
  gridColumnSpan: 1,
};

export default Button;
