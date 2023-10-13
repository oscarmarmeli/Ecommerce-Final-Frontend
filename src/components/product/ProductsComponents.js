// styles/ProductCardStyles.js
import styled from "styled-components";

export const CardContainer = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #f4f4f4;
  color: #333;
  border: 1px solid #ddd;
  margin: 0 10px; /* Ajusta el margen entre las tarjetas */
  margin-bottom: 20px;
  padding: 20px;
  width: calc(
    25% - 10px
  ); /* Asegura que haya espacio para tres columnas y el espacio entre ellas */
`;

export const ProductName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ProductDescripcion = styled.h2`
  font-size: 1rem;
  color: #555;
`;

export const ProductPrecio = styled.p`
  color: #e44d26;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const ProductCategoria = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const Form = styled.form`
  position: fixed; /* Fija el buscador a la izquierda de la pantalla */
  top: 50%; /* Lo posiciona verticalmente en el centro */
  left: 0; /* Lo coloca en el borde izquierdo */
  transform: translateY(-50%); /* Alinea verticalmente el formulario */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  background-color: #f0f0f0; /* Cambia el color de fondo */
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 200px; /* Ancho ajustado para un mejor aspecto */
  background-color: #fff; /* Cambia el color de fondo del input */
`;

export const AddToCartButton = styled.button`
  background-color: #007bff; /* Color de fondo */
  color: #fff; /* Color del texto */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #0056b3; /* Cambia el color de fondo al pasar el mouse */
  }
`;
