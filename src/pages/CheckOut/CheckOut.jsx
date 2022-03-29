import './CheckOut.style.scss';
import { useSelector } from 'react-redux';
import { CheckOutItem } from '../../components/CheckOutItem/CheckOutItem';
import { useEffect, useState } from 'react';
import { StripeCheckoutButton } from '../../components/StripeButton/StripeButton';

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
    <div className="checkout-page" data-testid="test-id-checkoutPage">
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
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalAmount} />
    </div>
  );
};
