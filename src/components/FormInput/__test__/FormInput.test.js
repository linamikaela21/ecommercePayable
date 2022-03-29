import { FormInput } from '../FormInput';
import { render, screen } from '@testing-library/react';

let data = {
  label: 'signIn',
  handleChange: jest.fn(),
};

describe('FormInput', () => {
  it('should render a FormInput', () => {
    render(<FormInput {...data} />);
    const inputElement = screen.getByTestId('test-id-formInput');
    expect(inputElement).toBeInTheDocument();
  });
  it('should render a FormInput have class group', () => {
    render(<FormInput {...data} />);
    const inputElement = screen.getByTestId('test-id-formInput');
    expect(inputElement.className).toBe('group');
  });
  it('should not render a FormInput', () => {
    data = { ...data, label: null };
    render(<FormInput {...data} />);
    const inputElement = screen.getByTestId('test-id-formInput');
    expect(inputElement).toBeInTheDocument();
  });
});
