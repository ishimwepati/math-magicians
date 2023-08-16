import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Button.css';

function Button({ label }) {
  return <button className="button" type="button">{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
