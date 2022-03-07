import './CartDropDown.styles.scss';
import { useDispatch } from 'react-redux';
import { cartHidden } from '../../redux/cart/actionsCart';
import { Button } from '../Button/Button';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

export const CartDropDown = ({ cartItemsArray }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItemsArray.length ? (
          cartItemsArray.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="emply-msg">Your cart is emply</span>
        )}
        <Link to="/checkOut">
          <Button
            childen={'GO TO CHECK OUT'}
            onClick={() => dispatch(cartHidden())}
          />
        </Link>
      </div>
    </div>
  );
};
