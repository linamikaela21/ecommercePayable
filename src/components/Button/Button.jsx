import React from 'react';
import './Button.styles.scss';

export const Button = ({
  childen,
  isGoogleSingIn,
  inverted,
  ...otherProps
}) => (
  <button
    data-testid="test-id-button"
    className={`${isGoogleSingIn ? 'google-sign-in ' : ''}${
      inverted ? 'inverted ' : ''
    }button`}
    {...otherProps}
  >
    {childen}
  </button>
);
