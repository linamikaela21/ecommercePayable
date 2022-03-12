import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { BsCart } from 'react-icons/bs';
import { CartDropDown } from '../CartDropDown/CartDropDown';
import { cartHidden } from '../../redux/cart/actionsCart';
import { signOutStart } from '../../redux/user/actionsUser';

export const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user);
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItemsArray = useSelector((state) => state.cart.cartItems);

  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(
      cartItemsArray.reduce(
        (accQuantity, cartItem) => accQuantity + cartItem.quantity,
        0
      )
    );
  }, [cartItemsArray]);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <Link
            to="/"
            className="option"
            onClick={() => dispatch(signOutStart())}
          >
            SIGN OUT
          </Link>
        ) : (
          <Link to="/signIn" className="option">
            SIGN IN
          </Link>
        )}
        <div className="item-count-div" onClick={() => dispatch(cartHidden())}>
          <div className="item-count">
            <span>{totalCount}</span>
          </div>
          <div className="item-icon">
            <BsCart size={35} />
          </div>
        </div>
      </div>
      {hidden ? null : <CartDropDown cartItemsArray={cartItemsArray} />}
    </div>
  );
};
