import { useSelector } from 'react-redux';
import './CollectionOverview.styles.scss';
import { CollectionPreview } from '../CollectionPreview/CollectionPreview';

export const CollectionOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  const collectionArray = collections
    ? Object.keys(collections).map((id) => collections[id])
    : [];
  return (
    <div className="collections-overview">
      {collectionArray.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
