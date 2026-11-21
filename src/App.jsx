import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './Components/AboutUs.jsx';
import ProductList from './Components/ProductList.jsx';
import CartItem from './Components/CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const cart = useSelector((state) => state.cart);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="app">
      <header>
        <h1>🌱 Paradise Nursery</h1>
        <nav aria-label="Main navigation">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('plants')}>Plants</button>
          <button onClick={() => setPage('cart')}>Cart ({itemCount})</button>
        </nav>
      </header>

      {page === 'home' && (
        <main className="hero">
          <div className="hero-content">
            <p className="eyebrow">Grown for good days</p>
            <h2>Welcome to Paradise Nursery</h2>
            <p>Bring beautiful, responsibly grown houseplants into your home.</p>
            <button className="primary" onClick={() => setPage('plants')}>Get Started</button>
            <AboutUs />
          </div>
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
          <h2>Shopping Cart</h2>
          <CartItem onContinueShopping={() => setPage('plants')} />
        </main>
      )}

      <footer>Paradise Nursery • Grown for good days.</footer>
    </div>
  );
}
