import './CheckOutItem.style.scss';
import { useDispatch } from 'react-redux';
import { ImCross } from 'react-icons/im';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import {
  addItemToCart,
  deleteItemFromCart,
  removeAllItemFromCart,
} from '../../redux/cart/actionsCart';

export const CheckOutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <RiArrowLeftSLine
          size={28}
          style={{ paddingRight: '12px', cursor: 'pointer' }}
          onClick={() => dispatch(deleteItemFromCart(cartItem))}
        />
        {quantity}
        <RiArrowRightSLine
          size={28}
          style={{ paddingLeft: '12px', cursor: 'pointer' }}
          onClick={() => dispatch(addItemToCart(cartItem))}
        />
      </span>
      <span className="price">$ {price}</span>
      <div className="remove-button">
        <ImCross onClick={() => dispatch(removeAllItemFromCart(cartItem))} />
      </div>
    </div>
  );
};
