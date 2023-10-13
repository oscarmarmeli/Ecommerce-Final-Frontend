import React, { useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import styled from "styled-components";
import ProductSearch from "../components/product/ProductSearch";
import ProductCard from "../components/product/ProductCard";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin-top: 20px;
`;

const Home = () => {
  const { data } = useGetProducts();
  const [filteredProducts, setFilteredProducts] = useState(data.data);

  if (!data) return <h1>Loading...</h1>;

  return (
    <PageContainer>
      <ProductSearch products={data.data} onSearch={setFilteredProducts} />
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </PageContainer>
  );
};

export default Home;
