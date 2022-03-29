import { CheckOutItem } from '../CheckOutItem';
import { render, screen, fireEvent } from '@testing-library/react';

let cartItem = { imageUrl: 'image', price: 100, name: 'name', quantity: 5 };

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('CheckOutItem', () => {
  it('should render a CartItem', () => {
    render(<CheckOutItem cartItem={cartItem} />);
    const buttonElement = screen.getByTestId('test-id-checkout-item');
    expect(buttonElement).toBeInTheDocument();
  });
  it('should render a dispatch deleteItemFromCart', () => {
    render(<CheckOutItem cartItem={cartItem} />);
    const buttonElem = screen.getByTestId('test-id-checkout-item-left');
    fireEvent.click(buttonElem);
  });
  it('should render a dispatch addItemToCart', () => {
    render(<CheckOutItem cartItem={cartItem} />);
    const buttonElem = screen.getByTestId('test-id-checkout-item-right');
    fireEvent.click(buttonElem);
  });
  it('should render a dispatch removeAllItemFromCart', () => {
    render(<CheckOutItem cartItem={cartItem} />);
    const buttonElem = screen.getByTestId('test-id-checkout-item-remove');
    fireEvent.click(buttonElem);
  });
});
