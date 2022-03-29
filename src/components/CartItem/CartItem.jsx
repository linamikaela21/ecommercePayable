import './CartItem.style.scss';

export const CartItem = ({ item: { id, imageUrl, price, name, quantity } }) => (
  <div key={id} className="cart-item" data-testid="test-id-cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);
