import { CartDropDown } from '../CartDropDown';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { BrowserRouter, Link } from 'react-router-dom';

let cartItemsArray = [
  { id: '1', item: ['algo'] },
  { id: '2', item: ['algo'] },
];

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

const MockCartDropDown = () => {
  return (
    <BrowserRouter>
      <CartDropDown cartItemsArray={cartItemsArray} />
    </BrowserRouter>
  );
};

const MockCartDropDownWithOutCartItemsArray = () => {
  return (
    <BrowserRouter>
      <CartDropDown cartItemsArray="" />
    </BrowserRouter>
  );
};

describe('CartDropDown', () => {
  it('should render a CartDropDown', () => {
    render(<MockCartDropDown />);
    const mainDiv = screen.getByTestId('test-id-dropdown');
    expect(mainDiv).toBeInTheDocument();

    const collectionItemElement =
      screen.getByTestId('test-id-dropdown').textContent;
    expect(collectionItemElement).toBe(' x $ x $GO TO CHECK OUT');
  });

  it('should cartItemsArray have 2 items', () => {
    render(<MockCartDropDown />);
    const mainDiv = screen.getByTestId('test-id-cart-items');
    const elemDiv = within(mainDiv).getAllByTestId('test-id-cart-item');
    expect(elemDiv.length).toBe(2);
  });

  it('should render a MockCartDropDown withOut CartItemsArray', () => {
    render(<MockCartDropDownWithOutCartItemsArray />);
    const span = screen.getByTestId('test-id-dropdown-span');
    expect(span).toBeInTheDocument();
    const spanCollectionItemElement = screen.getByTestId(
      'test-id-dropdown-span'
    ).textContent;
    expect(spanCollectionItemElement).toBe('Your cart is emply');
  });

  it('should render a dispatch cartHidden', () => {
    render(
      <BrowserRouter>
        <Link to="/checkout">
          <CartDropDown key={1} cartItemsArray={cartItemsArray} />
        </Link>
      </BrowserRouter>
    );
    const buttonElem = screen.getByTestId('test-id-dropdown-button');
    fireEvent.click(buttonElem);
  });
});
