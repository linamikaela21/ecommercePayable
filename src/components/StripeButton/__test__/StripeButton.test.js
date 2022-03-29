import { StripeCheckoutButton } from '../StripeButton';
import { render, screen } from '@testing-library/react';

const publishableKey = '123';

describe('StripeCheckoutButton', () => {
  it('should render a StripeCheckoutButton', () => {
    render(<StripeCheckoutButton publishableKey={publishableKey} />);
    const buttonElement = screen.getByTestId('test-id-button-checkout');
    expect(buttonElement).toBeInTheDocument();
  });
});
