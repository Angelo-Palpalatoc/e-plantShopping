import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './Components/AboutUs.jsx';
import ProductList from './Components/ProductList.jsx';
import CartItem from './Components/CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const cart = useSelector((state) => state.cart);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="app">
      <header>
        <h1>🌱 Paradise Nursery</h1>
        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('plants')}>Plants</button>
          <button onClick={() => setPage('cart')}>Cart ({itemCount})</button>
        </nav>
      </header>

      {page === 'home' && (
        <main className="hero">
          <div>
            <p className="eyebrow">Grown for good days</p>
            <h2>Bring nature home.</h2>
            <p>Beautiful houseplants, thoughtfully grown and ready to brighten your space.</p>
            <button className="primary" onClick={() => setPage('plants')}>
              Shop plants
            </button>
            <AboutUs />
          </div>
          <div className="hero-art">🌿</div>
        </main>
      )}

      {page === 'plants' && (
        <main>
          <h2>Our plants</h2>
          <ProductList />
        </main>
      )}

      {page === 'cart' && (
        <main>
          <h2>Your cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => <CartItem key={item.id} item={item} />)}
              <h3>Total: ${total.toFixed(2)}</h3>
              <button className="primary" onClick={() => alert('Coming Soon')}>
                Checkout
              </button>
              <button onClick={() => setPage('plants')}>Continue shopping</button>
            </>
          )}
        </main>
      )}

      <footer>Paradise Nursery • Grown for good days.</footer>
    </div>
  );
}
