import { CheckOut } from '../CheckOut';
import { render, screen } from '@testing-library/react';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => [
    {
      price: 18,
      name: 'Green Beanie',
      id: 5,
      imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
      quantity: 1,
    },
  ],
}));

describe('CheckOut', () => {
  it('should render a CheckOut', () => {
    render(<CheckOut />);
    const CheckOutElement = screen.getByTestId('test-id-checkoutPage');
    expect(CheckOutElement).toBeInTheDocument();
  });
});
