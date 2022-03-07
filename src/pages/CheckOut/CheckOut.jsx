import './CheckOut.style.scss';
import { useSelector } from 'react-redux';
import { CheckOutItem } from '../../components/CheckOutItem/CheckOutItem';
import { useEffect, useState } from 'react';

export const CheckOut = () => {
  const cartItemsArray = useSelector((state) => state.cart.cartItems);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cartItemsArray.reduce(
        (accQuantity, cartItem) =>
          accQuantity + cartItem.quantity * cartItem.price,
        0
      )
    );
  }, [cartItemsArray]);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItemsArray.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${totalAmount}</div>
    </div>
  );
};
