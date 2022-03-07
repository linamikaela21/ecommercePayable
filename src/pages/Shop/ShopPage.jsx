import React from 'react';
import { CollectionPreview } from '../../components/CollectionPreview/CollectionPreview';
import { SHOP_DATA as data } from './dataShop';

export const ShopPage = () => {
  return (
    <div className="shop-page">
      {data.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
