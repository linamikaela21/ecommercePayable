import React from 'react';
import { useDispatch } from 'react-redux';
import './CollectionItem.styles.scss';
import { Button } from '../Button/Button';
import { addItemToCart } from '../../redux/cart/actionsCart';

export const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        childen={`Add to cart`}
        inverted
        onClick={() => dispatch(addItemToCart(item))}
      />
    </div>
  );
};
