import React from "react";
import styles from "../ProductCard/ProductoCard.module.css";

const ProductoCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img
        src={product.url}
        alt={product.nombre}
        className={styles.productImage}
      />
      <h2 className={styles.productName}>{product.nombre}</h2>
      <p className={styles.productDescription}>{product.descripcion}</p>
      <p className={styles.productCategory}>Categoría: {product.categoria}</p>
      <p className={styles.productPrice}>${product.precio}</p>
      <button className={styles.buyButton}>Comprar</button>
    </div>
  );
};

export default ProductoCard;