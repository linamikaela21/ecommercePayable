import { CollectionPage } from '../CollectionPage';
import { render, screen } from '@testing-library/react';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => ({
    mens: {
      routeName: 'mens',
      id: 'ziCMWN5jSkir6ehA0pns',
      title: 'Mens',
      items: [
        {
          id: 30,
          price: 325,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        },
        {
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40,
          id: 34,
        },
      ],
    },
    womens: {
      routeName: 'womens',
      id: 'yjrUuZdlU9WuJn54pNAr',
      title: 'Womens',
      items: [
        {
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          name: 'Blue Tanktop',
          price: 25,
          id: 23,
        },
        {
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          name: 'Striped Sweater',
          id: 27,
          price: 45,
        },
      ],
    },
  }),
}));

jest.mock('react-router-dom', () => ({
  useParams: () => ({ collectionId: 'mens' }),
}));

describe('CollectionPage', () => {
  it('should render a CollectionPage', () => {
    render(<CollectionPage />);
    const CollectionPageElement = screen.getByTestId('test-id-CollectionPage');
    expect(CollectionPageElement).toBeInTheDocument();
  });
});
