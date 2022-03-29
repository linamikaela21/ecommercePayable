import { CollectionPreview } from '../CollectionPreview';
import { render, screen } from '@testing-library/react';

let data = {
  title: 'title',
  items: [
    { id: 1, name: 'name', price: 50, imageUrl: 'photo' },
    { id: 2, name: 'name2', price: 80, imageUrl: 'photo' },
  ],
};

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('CollectionPreview', () => {
  it('should render a CollectionPreview', () => {
    render(<CollectionPreview {...data} />);
    const mainDiv = screen.getByTestId('test-id-collection-preview');
    expect(mainDiv).toBeInTheDocument();

    const collectionItemElement = screen.getByTestId(
      'test-id-collection-preview'
    ).textContent;
    expect(collectionItemElement).toBe(
      'TITLEname$50Add to cartname2$80Add to cart'
    );
  });
});
