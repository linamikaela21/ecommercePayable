import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CollectionItem } from '../../components/CollectionItem/CollectionItem';
import './CollectionPage.style.scss';

export const CollectionPage = () => {
  const { collectionId } = useParams();
  const collections = useSelector((state) => state.shop.collections);
  const { title, items } = collections[collectionId];
  return (
    <div className="collection-page" data-testid="test-id-CollectionPage">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
