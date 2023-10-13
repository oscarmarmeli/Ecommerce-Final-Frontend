import React, { useState, useEffect } from "react";
import { Form, Input } from "./ProductsComponents";

const ProductSearch = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Use useEffect para realizar la búsqueda solo cuando products se ha cargado
  useEffect(() => {
    if (products) {
      const filteredProducts = products.filter((product) =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // Llama a la función onSearch para enviar los productos filtrados a Home.jsx
      onSearch(filteredProducts);
    }
  }, [products, searchTerm]);

  return (
    <Form>
      <Input
        type="text"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Form>
  );
};

export default ProductSearch;
