import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../store/useCart";
import "../Cart.css";

const FinalCart = () => {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [shippingType, setShippingType] = useState("retiro por el local"); // Valor por defecto
  const [shippingAddress, setShippingAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0); // Inicializado a 0

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      // Obtener el ID del usuario actual (deberás implementar esta lógica)
      const userId = 2; /* hardcodeado para que grabe */

      // Calcular el precio total a partir del carrito
      const calculatedTotalPrice = cart.reduce(
        (total, product) => total + product.precio,
        0
      );

      // Obtener el tipo de envío y la dirección de envío
      const orderData = {
        user_id: userId,
        total_price: calculatedTotalPrice,
        shipping_type: shippingType,
        shipping_address: shippingAddress,
        cart, // El carrito de compras
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // El pedido se registró con éxito, puedes redirigir al usuario a una página de confirmación
        console.log("Pedido registrado con éxito");
        clearCart(); // Limpia el carrito después de la compra
        // Registro exitoso, puedes redirigir al usuario a la página de inicio de sesión o mostrar un mensaje de éxito.
        navigate("/home");
      } else {
        // Hubo un error en el registro del pedido, muestra un mensaje de error al usuario
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      // Maneja errores de red u otros errores inesperados
      console.error(error);
      setError("Ocurrió un error. Por favor, inténtelo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <li key={product.id} className="cart-item">
          <span className="product-info">
            <strong>{product.nombre}</strong> (Id:{product.id})
          </span>
          <span className="product-cantidad">Cantidad: {product.cantidad}</span>
          <span className="product-precio">Precio: {product.precio}</span>
        </li>
      ))}
      <label>
        Tipo de Envío:
        <select
          name="shipping_type"
          value={shippingType}
          onChange={(e) => setShippingType(e.target.value)}
        >
          <option value="retiro por el local">retiro por el local</option>
          <option value="envío a domicilio">envío a domicilio</option>
        </select>
      </label>
      <label>
        Dirección de Envío:
        <input
          type="text"
          name="shipping_address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </label>
      <button
        onClick={handleCheckout}
        className="checkout-button"
        disabled={loading}
      >
        Realizar Pedido
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FinalCart;
