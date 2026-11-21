import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store.js';

export const plantsArray = [
  { id: 1, name: 'Lavender', category: 'Aromatic', cost: 12, emoji: '💜' },
  { id: 2, name: 'Mint', category: 'Aromatic', cost: 8, emoji: '🌿' },
  { id: 3, name: 'Rosemary', category: 'Aromatic', cost: 10, emoji: '🌱' },
  { id: 4, name: 'Aloe Vera', category: 'Medicinal', cost: 15, emoji: '🌵' },
  { id: 5, name: 'Chamomile', category: 'Medicinal', cost: 11, emoji: '🌼' },
  { id: 6, name: 'Echinacea', category: 'Medicinal', cost: 14, emoji: '🌸' },
  { id: 7, name: 'Snake Plant', category: 'Air Purifying', cost: 18, emoji: '🪴' },
  { id: 8, name: 'Peace Lily', category: 'Air Purifying', cost: 20, emoji: '🌷' },
  { id: 9, name: 'Spider Plant', category: 'Air Purifying', cost: 13, emoji: '🌾' },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const categories = ['Aromatic', 'Medicinal', 'Air Purifying'];

  return (
    <>
      {categories.map((category) => (
        <section key={category}>
          <h3>{category} Plants</h3>
          <div className="grid">
            {plantsArray
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const added = cart.some((item) => item.id === plant.id);
                return (
                  <article className="card" key={plant.id}>
                    <div className="plant">{plant.emoji}</div>
                    <h4>{plant.name}</h4>
                    <p>${plant.cost.toFixed(2)}</p>
                    <button
                      disabled={added}
                      onClick={() =>
                        dispatch(
                          add({
                            id: plant.id,
                            name: plant.name,
                            price: plant.cost,
                            emoji: plant.emoji,
                          }),
                        )
                      }
                    >
                      {added ? 'Added' : 'Add to cart'}
                    </button>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </>
  );
}
