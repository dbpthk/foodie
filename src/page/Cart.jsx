import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Spicy Chicken Burger",
      image: "https://source.unsplash.com/80x80/?burger",
      price: 8.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Cheesy Veggie Pizza",
      image: "https://source.unsplash.com/80x80/?pizza",
      price: 12.5,
      quantity: 1,
    },
    {
      id: 3,
      name: "Fresh Mango Smoothie",
      image: "https://source.unsplash.com/80x80/?smoothie",
      price: 4.5,
      quantity: 3,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-semibold">Total:</h3>
            <span className="text-xl font-bold">${getTotal()}</span>
          </div>

          <button className="mt-4 bg-amber-500 text-white py-2 px-6 cursor-pointer rounded hover:bg-amber-600 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
