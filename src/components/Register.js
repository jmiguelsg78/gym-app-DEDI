import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Nombre" onChange={handleChange} />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} />

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" placeholder="Contraseña" onChange={handleChange} />

        <button type="submit">Registrarse</button>
      </form>
    </section>
  );
}

export default Register;