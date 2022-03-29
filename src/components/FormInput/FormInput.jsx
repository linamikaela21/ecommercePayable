import React from 'react';
import './FormInput.styles.scss';

export const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group" data-testid="test-id-formInput">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value?.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
