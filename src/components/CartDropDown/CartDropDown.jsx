import './CartDropDown.styles.scss';
import { useDispatch } from 'react-redux';
import { cartHidden } from '../../redux/cart/actionsCart';
import { Button } from '../Button/Button';
import { CartItem } from '../CartItem/CartItem';
import { useHistory } from 'react-router-dom';

export const CartDropDown = ({ cartItemsArray }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const cartHiddenFn = () => {
    dispatch(cartHidden());
    history.push('/checkOut');
  };

  return (
    <div className="cart-dropdown" data-testid="test-id-dropdown">
      <div className="cart-items" data-testid="test-id-cart-items">
        {cartItemsArray.length ? (
          cartItemsArray.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="emply-msg" data-testid="test-id-dropdown-span">
            Your cart is emply
          </span>
        )}
        <Button
          data-testid="test-id-dropdown-button"
          childen={'GO TO CHECK OUT'}
          onClick={() => cartHiddenFn()}
        />
      </div>
    </div>
  );
};
