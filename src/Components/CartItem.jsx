import { useDispatch } from 'react-redux';
import { inc, dec, del } from '../store.js';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const itemTotal = item.price * item.qty;

  return (
    <div className="cart-item">
      <span className="thumb">{item.emoji}</span>
      <strong>{item.name}</strong>
      <span>
        ${item.price.toFixed(2)} × {item.qty} = ${itemTotal.toFixed(2)}
      </span>
      <button onClick={() => dispatch(dec(item.id))}>−</button>
      <button onClick={() => dispatch(inc(item.id))}>+</button>
      <button onClick={() => dispatch(del(item.id))}>Delete</button>
    </div>
  );
}
