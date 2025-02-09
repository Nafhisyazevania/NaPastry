import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CroissantImg from "../assets/Croissant.jpg";
import CromboloniImg from "../assets/Cromboloni.jpg";
import SourdoughImg from "../assets/Sourdough.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Croissant", price: 36000, quantity: 1, image: CroissantImg },
    { id: 2, name: "Cromboloni", price: 42000, quantity: 1, image: CromboloniImg },
    { id: 3, name: "Sourdough", price: 45000, quantity: 1, image: SourdoughImg },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-5 p-4">
      <h2 className="mb-4 text-center fw-bold">Your Cart</h2>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="thead-light">
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} className="img-fluid" style={{ maxWidth: "100px", height: "auto" }} />
                </td>
                <td>{item.name}</td>
                <td>Rp {item.price.toLocaleString()}</td>
                <td>
                  <button className="btn btn-sm btn-danger mx-1" onClick={() => handleQuantityChange(item.id, -1)}>
                    -
                  </button>
                  {item.quantity}
                  <button className="btn btn-sm btn-success mx-1" onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </button>
                </td>
                <td>Rp {(item.price * item.quantity).toLocaleString()}</td>
                <td>
                  <button className="btn btn-sm btn-warning" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className="text-end mt-3">Total: Rp {totalAmount.toLocaleString()}</h4>
      <button className="btn btn-primary mt-4 w-100">Checkout</button>
    </div>
  );
};

export default Cart;
