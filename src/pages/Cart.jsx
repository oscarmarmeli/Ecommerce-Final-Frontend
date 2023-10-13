import React from "react";
import { Link } from "react-router-dom";
import useCart from "../store/useCart";
import "../Cart.css";

const Cart = () => {
  const { cart, clearCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <button className="clear-cart-btn" onClick={() => clearCart()}>
            Limpiar carrito
          </button>
          <ul className="cart-list">
            {cart.map((product) => (
              <li key={product.id} className="cart-item">
                <span className="product-info">
                  <strong>{product.nombre}</strong> (Id:{product.id})
                </span>
                <span className="product-cantidad">
                  Cantidad: {product.cantidad}
                </span>
                <span className="product-precio">
                  Precio: {product.precio}
                </span>
              </li>
            ))}
          </ul>
          <div className="checkout-buttons">
            <Link to="/" className="checkout-link">
              Seguir comprando
            </Link>
            <Link to="/finalcart" className="checkout-link">
              Ir a pagar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
