// components/ProductCard.js
import React from "react";
import {
  CardContainer,
  ProductName,
  ProductDescripcion,
  ProductPrecio,
  ProductCategoria,
  AddToCartButton,
} from "./ProductsComponents";
import useCart from "../../store/useCart";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useCart();
  const handleAddCart = () => {
    setCart([...cart, { ...product, cantidad: 1 }]);
  };

  return (
    <CardContainer>
      <img
        src={product.url}
        alt={product.nombre}
        style={{ width: "300px", height: "300px" }}
      />
      <ProductName>{product.nombre}</ProductName>
      <ProductDescripcion>{product.descripcion}</ProductDescripcion>
      <ProductPrecio>${product.precio}</ProductPrecio>
      <ProductCategoria>{product.categoria}</ProductCategoria>
      <AddToCartButton onClick={handleAddCart}>Agregar al carrito</AddToCartButton>
    </CardContainer>
  );
};

export default ProductCard;
