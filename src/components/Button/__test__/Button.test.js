import { Button } from '../Button';
import { render, screen } from '@testing-library/react';

let data = {
  childen: 'signIn',
  isGoogleSingIn: true,
  inverted: true,
};

describe('Button', () => {
  it('should render a button', () => {
    render(<Button {...data} />);
    const buttonElement = screen.getByTestId('test-id-button');
    expect(buttonElement).toBeInTheDocument();
  });
  it('should render a button have class isGoogleSingIn and inverted', () => {
    render(<Button {...data} />);
    const buttonElement = screen.getByTestId('test-id-button');
    expect(buttonElement.className).toBe('google-sign-in inverted button');
  });
  it('should not render a button have class isGoogleSingIn and inverted', () => {
    data = { ...data, isGoogleSingIn: false, inverted: false };
    render(<Button {...data} />);
    const buttonElement = screen.getByTestId('test-id-button');
    expect(buttonElement.className).toBe('button');
  });
});
