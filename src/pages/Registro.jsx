import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  ErrorText,
  SubmitButton,
  Container,
} from "../components/RegisterComponents";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const {
      firstName,
      lastname,
      email,
      address,
      telephone,
      password,
      confirmPassword,
    } = e.target.elements;

    if (password.value !== confirmPassword.value) {
      setError("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isAdmin: "0", // Asignar el valor correcto para isAdmin
          firstName: firstName.value,
          lastname: lastname.value,
          email: email.value,
          address: address.value,
          password: password.value,
          telephone: telephone.value, // Asignar un valor adecuado para el teléfono
        }),
      });

      if (!response.ok) {
        setError("Error al registrar usuario. Por favor, inténtelo de nuevo.");
        setLoading(false);
        return;
      }

      // Registro exitoso, puedes redirigir al usuario a la página de inicio de sesión o mostrar un mensaje de éxito.
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError("Ocurrió un error. Por favor, inténtelo de nuevo.");
    }
    setLoading(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="firstName" placeholder="Nombre" required />
        <Input type="text" name="lastname" placeholder="Apellido" required />
        <Input type="text" name="address" placeholder="Dirección" required />
        <Input type="text" name="telephone" placeholder="Teléfono" required />
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Contraseña"
          required
        />
        {error && (
          <ErrorText>
            Usuario o contraseña incorrectos. Por favor intente de nuevo.
          </ErrorText>
        )}
        <SubmitButton type="submit" disabled={loading}>
          Registrarse
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default RegisterForm;
