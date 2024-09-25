import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss'

const FormInput = ({
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  autoComplete = 'off',
  className = 'form-input',
}) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
};

export default FormInput;
