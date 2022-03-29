import { CollectionItem } from '../CollectionItem';
import { fireEvent, render, screen } from '@testing-library/react';

let item = { id: 1, name: 'name123', price: 50, imageUrl: 'photo' };

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('CollectionItem', () => {
  it('should render a CollectionItem', () => {
    render(<CollectionItem item={item} />);
    const mainDiv = screen.getByTestId('test-id-collection-item');
    expect(mainDiv).toBeInTheDocument();

    const collectionItemElement = screen.getByTestId(
      'test-id-collection-item'
    ).textContent;
    expect(collectionItemElement).toBe('name123$50Add to cart');
  });

  it('should render a dispatch addItemToCart', () => {
    render(<CollectionItem item={item} />);
    const buttonElem = screen.getByTestId('test-id-collection-item-button');
    fireEvent.click(buttonElem);
  });
});
