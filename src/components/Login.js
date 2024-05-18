import React, { useState } from 'react';
import { useAuth } from "../context/authContext.js"
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const auth = useAuth()



  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password)
      .then(() => {
        navigate('/dash'); // Redirige a '/home' si el inicio de sesión es exitoso
      })
      .catch(() => {
        alert('Datos incorrectos. Intenta nuevamente.'); // Muestra una alerta si falla
      });
  };

  const handleLogout = () => {
    auth.logout()
  }
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Iniciar Sesión</h1>
        <form >
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <button onClick={(e) => handleLogin(e)}>Iniciar Sesión</button>
          <br />

        </form>
      </div>
    </div>
  );
};

export default Login;
