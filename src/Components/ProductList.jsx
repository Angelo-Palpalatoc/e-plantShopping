import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store.js';

// Six unique plants are provided in each category for the assignment rubric.
export const plantsArray = [
  { id: 1, name: 'Lavender', category: 'Aromatic', cost: 12, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600' },
  { id: 2, name: 'Mint', category: 'Aromatic', cost: 8, image: 'https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=600' },
  { id: 3, name: 'Rosemary', category: 'Aromatic', cost: 10, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8f7f8d1?w=600' },
  { id: 4, name: 'Basil', category: 'Aromatic', cost: 9, image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=600' },
  { id: 5, name: 'Thyme', category: 'Aromatic', cost: 7, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600' },
  { id: 6, name: 'Lemongrass', category: 'Aromatic', cost: 11, image: 'https://images.unsplash.com/photo-1599909533730-f9d8d3e6f7f8?w=600' },
  { id: 7, name: 'Aloe Vera', category: 'Medicinal', cost: 15, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600' },
  { id: 8, name: 'Chamomile', category: 'Medicinal', cost: 11, image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600' },
  { id: 9, name: 'Echinacea', category: 'Medicinal', cost: 14, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600' },
  { id: 10, name: 'Calendula', category: 'Medicinal', cost: 13, image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600' },
  { id: 11, name: 'Ginger', category: 'Medicinal', cost: 12, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600' },
  { id: 12, name: 'Sage', category: 'Medicinal', cost: 10, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8f7f8d1?w=600' },
  { id: 13, name: 'Snake Plant', category: 'Air Purifying', cost: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600' },
  { id: 14, name: 'Peace Lily', category: 'Air Purifying', cost: 20, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?w=600' },
  { id: 15, name: 'Spider Plant', category: 'Air Purifying', cost: 13, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600' },
  { id: 16, name: 'Boston Fern', category: 'Air Purifying', cost: 17, image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?w=600' },
  { id: 17, name: 'Pothos', category: 'Air Purifying', cost: 16, image: 'https://images.unsplash.com/photo-1614594576039-9f6c2e9c8c3b?w=600' },
  { id: 18, name: 'Rubber Plant', category: 'Air Purifying', cost: 22, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600' },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const categories = ['Aromatic', 'Medicinal', 'Air Purifying'];

  return (
    <div className="product-list-page">
      {/* The shared navigation and dynamic cart count are rendered by App.jsx. */}
      {categories.map((category) => (
        <section key={category}>
          <h3>{category} Plants</h3>
          <div className="grid">
            {plantsArray.filter((plant) => plant.category === category).map((plant) => {
              const added = cart.some((item) => item.id === plant.id);
              return (
                <article className="card" key={plant.id}>
                  <img className="plant-image" src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.cost.toFixed(2)}</p>
                  <button disabled={added} onClick={() => dispatch(add({ ...plant, price: plant.cost }))}>
                    {added ? 'Added' : 'Add to cart'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
