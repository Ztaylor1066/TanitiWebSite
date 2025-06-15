import { useState } from "react";
import "../BookingPage.css";

export default function BookingPage() {
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, name: "Scuba Diving Tour", price: 120 },
    { id: 2, name: "Volcano Hike", price: 80 },
    { id: 3, name: "Luxury Resort (1 night)", price: 250 },
    { id: 4, name: "Bike Rental (per day)", price: 15 },
    { id: 5, name: "Cultural Show Ticket", price: 30 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="booking-container">
      <div className="options-column">
        <h2>Book Your Experience</h2>
        {items.map((item) => (
          <div key={item.id} className="booking-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-column">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items selected.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  {item.name} (${item.price} each)
                </div>
                <div className="cart-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}
