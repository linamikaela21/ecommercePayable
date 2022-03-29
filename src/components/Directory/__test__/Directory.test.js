import { Directory } from '../Directory';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => [
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
}));

describe('Directory', () => {
  it('should render a Directory', () => {
    render(
      <BrowserRouter>
        <Directory />
      </BrowserRouter>
    );
    const mainDiv = screen.getByTestId('test-id-directory-menu');
    expect(mainDiv).toBeInTheDocument();
  });
});
