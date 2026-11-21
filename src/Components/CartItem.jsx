import { useDispatch, useSelector } from 'react-redux';
import { inc, dec, del } from '../store.js';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (items.length === 0) return <p>Your shopping cart is empty.</p>;

  return (
    <section className="shopping-cart">
      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img className="cart-thumb" src={item.image} alt={item.name} />
          <strong>{item.name}</strong>
          <span>Unit price: ${item.price.toFixed(2)}</span>
          <span>Quantity: {item.qty}</span>
          <span>Item total: ${(item.price * item.qty).toFixed(2)}</span>
          <button onClick={() => dispatch(dec(item.id))}>−</button>
          <button onClick={() => dispatch(inc(item.id))}>+</button>
          <button onClick={() => dispatch(del(item.id))}>Delete</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button className="primary" onClick={() => alert('Coming Soon')}>Checkout</button>
      <button onClick={onContinueShopping}>Continue Shopping</button>
    </section>
  );
}
