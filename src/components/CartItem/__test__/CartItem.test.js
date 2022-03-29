import { CartItem } from '../CartItem';
import { render, screen } from '@testing-library/react';

let data = {
  item: { imageUrl: 'image', price: 100, name: 'name', quantity: 5 },
};

describe('CartItem', () => {
  it('should render a CartItem', () => {
    render(<CartItem {...data} />);
    const buttonElement = screen.getByTestId('test-id-cart-item');
    expect(buttonElement).toBeInTheDocument();
  });
  it('should render a CartItem have class "cart-item"', () => {
    render(<CartItem {...data} />);
    const buttonElement = screen.getByTestId('test-id-cart-item');
    expect(buttonElement.className).toBe('cart-item');
  });
});
